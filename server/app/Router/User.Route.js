const { checkLogin } = require("../http/Middlewares/Checklogin");
const { UserController } = require("../http/Controllers/User.Controller");
const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.post("/profile", checkLogin, UserController.editProfile);

module.exports = {
  userRoutes: router,
};
