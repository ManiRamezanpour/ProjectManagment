const { body } = require("express-validator");
const { UserModel } = require("../../Model/User.Model");
function registerValidators() {
  return [
    body("username")
      .notEmpty()
      .custom(async (value, ctx) => {
        if (value) {
          const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
          if (usernameRegex.test(value)) {
            const user = await UserModel.findOne({ username: value });
            if (user) {
              throw "user is selected ";
            }
            return true;
          }
          throw "Username is not true ";
        }
        throw "Username cant Empty";
      }),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("Email is not true")
      .custom(async (value) => {
        const emails = await UserModel.findOne({ email: value });
        if (emails) {
          throw "user is been selected ";
        }
      }),
    body("mobile")
      .notEmpty()
      .isMobilePhone("fa-IR")
      .withMessage("Phone number is not true"),
    // .custom((value) => {
    //   const mobile = UserModel.findOne({ value });
    //   if (mobile) {
    //     throw "mobile is selected ";
    //   }
    // }),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage("Password most be between 6-16 charecter")
      .custom((value, ctx) => {
        if (!value) throw "Password cant empty";
        if (value !== ctx?.req?.body?.confirm_password)
          throw "Password Most be equals";
        return true;
      }),
  ];
}

module.exports = {
  registerValidators,
};
