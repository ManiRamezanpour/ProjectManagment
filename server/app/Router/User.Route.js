const { checkLogin } = require("../http/Middlewares/Checklogin");
const { UserController } = require("../http/Controllers/User.Controller");
const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
module.exports = {
  userRoutes: router,
};
