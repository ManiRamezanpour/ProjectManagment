class AuthController {
  Register(req, res, next) {
    const { username, password, email, mobild } = req.body;
  }
  Login() {}

  ResetPassword() {}
}

module.exports = {
  AuthController: new AuthController(),
};
