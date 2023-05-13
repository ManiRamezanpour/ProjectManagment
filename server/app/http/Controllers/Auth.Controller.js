const { token } = require("morgan");
const { UserModel } = require("../../Model/User.Model");
const { hashString } = require("../../Modules/hashString");
const bcrypt = require("bcrypt");
const { tokenGenerator } = require("../../Modules/jwt");

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
      next(error);
    }
  }
  async Login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ username });
      if (!user)
        throw { status: 404, message: "username or password is false" };

      const comparerResult = bcrypt.compareSync(password, user.password);
      const token = tokenGenerator({ username });
      user.token = token;
      user.save();
      if (!comparerResult)
        throw { status: 404, message: "username or password is false" };
      return res.status(200).json({
        status: 202,
        success: true,
        message: "your login is success",
        token: tokenGenerator({username}),
      });
    } catch (error) {
      next(error);
    }
  }

  ResetPassword() {}
}

module.exports = {
  AuthController: new AuthController(),
};
