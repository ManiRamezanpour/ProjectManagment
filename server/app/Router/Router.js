const AuthController = require("../http/Controllers/Auth.Controller");
const ProjectController = require("../http/Controllers/Project.Controller");
const TeamController = require("../http/Controllers/Team.Controller");
const UserController = require("../http/Controllers/User.Controller");

const router = require("express").Router();
router.use("/team", TeamController);
router.use("/project", ProjectController);
router.use("/auth", AuthController);
router.use("user", UserController);
module.exports = {
  AllRoutes: router,
};
