const { body } = require("express-validator");
function registerValidators() {
  return [
    body("username")
      .notEmpty()
      .custom((value, ctx) => {
        console.log(value);
        if (value) {
          const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
          if (usernameRegex.test(value)) {
            return true;
          }
          throw "Username is not true ";
        }
        throw "Username cant Empty";
      }),
    body("email").notEmpty().isEmail().withMessage("Email is not true"),
    body("mobile")
      .notEmpty()
      .isMobilePhone("fa-IR")
      .withMessage("Phone number is not true"),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage("Password most be between 6-16 charecter")
      .custom((value, ctx) => {
        console.log(value);
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
