const { validationResult } = require("express-validator");

class AuthController {
  Register(req, res, next) {
    const { username, password, email, mobild } = req.body;
    return res.json(req.body);
  }
  Login() {}

  ResetPassword() {}
}

module.exports = {
  AuthController: new AuthController(),
};
