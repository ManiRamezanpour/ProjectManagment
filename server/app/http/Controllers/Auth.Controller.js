const { UserModel } = require("../../Model/User.Model");
const { hashString } = require("../../Modules/hashString");

class AuthController {
  async Register(req, res, next) {
    try {
      
   
    const { username, password, email, mobile } = req.body;
    const hashedPassword = hashString(password);
    const user = await UserModel.create({
      email,
      username,
      password: hashedPassword,
      mobile,
    }).catch((err) => {
      if (err?.code == 11000) {
        throw {
          status: 400,
          message: "username is used please select another",
        };
      }
    });
    return res.json(user);
  } catch (error) {
   next(error)   
  }
  }
  Login() {}

  ResetPassword() {}
}

module.exports = {
  AuthController: new AuthController(),
};
