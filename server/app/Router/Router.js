const express = require("express");
const { teamRoutes } = require("./Team.Route");
const { userRoutes } = require("./User.Route");
const { authRoutes } = require("./Auth.Route");
const { projectRoutes } = require("./Project.Route");
const router = express.Router();
router.use("/team", teamRoutes);
router.use("/project", projectRoutes);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
module.exports = {
  AllRoutes: router,
};
