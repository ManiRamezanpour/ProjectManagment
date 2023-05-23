const { checkLogin } = require("../http/Middlewares/Checklogin");
const { UserController } = require("../http/Controllers/User.Controller");
const { upload } = require("../http/Middlewares/multer");
const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.post("/profile", checkLogin, UserController.editProfile);
router.post(
  "/profile/upload-image",
  checkLogin,
  upload.single("image"),
  UserController.editProfile
);

module.exports = {
  userRoutes: router,
};
