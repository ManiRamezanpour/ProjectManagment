const { checkLogin } = require("../http/Middlewares/Checklogin");
const { UserController } = require("../http/Controllers/User.Controller");
const { upload } = require("../http/Middlewares/Multer");
const { expressValidatorsMapper } = require("../http/Middlewares/CheckErrors");
const { ImageValidators } = require("../http/Validations/Image.Validation");
const router = require("express").Router();

router.get("/profile", checkLogin, UserController.getProfile);
router.post("/profile", checkLogin, UserController.editProfile);
router.post(
  "/profile/upload-image",
  checkLogin,
  ImageValidators(),
  expressValidatorsMapper,
  upload.single("image"),
  UserController.uploadProfileImage
);

module.exports = {
  userRoutes: router,
};
