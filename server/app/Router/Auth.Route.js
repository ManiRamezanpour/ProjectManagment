const { AuthController } = require("../http/Controllers/Auth.Controller");
const { expressValidatorsMapper } = require("../http/Middlewares/CheckErrors");
const { registerValidators } = require("../http/Validations/Auth.Validation");

const router = require("express").Router();
router.post(
  "/register",
  registerValidators(),
  expressValidatorsMapper,
  AuthController.Register
);
module.exports = {
  authRoutes: router,
};
