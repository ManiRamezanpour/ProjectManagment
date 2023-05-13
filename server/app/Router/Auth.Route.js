const { AuthController } = require("../http/Controllers/Auth.Controller");
const { expressValidatorsMapper } = require("../http/Middlewares/CheckErrors");
const {
  registerValidators,
  loginValidators,
} = require("../http/Validations/Auth.Validation");

const router = require("express").Router();
router.post(
  "/register",
  registerValidators(),
  expressValidatorsMapper,
  AuthController.Register
);
router.post(
  "/login",
  loginValidators(),
  expressValidatorsMapper,
  AuthController.Login
);
module.exports = {
  authRoutes: router,
};
