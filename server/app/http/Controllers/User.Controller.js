class UserController {
  async getProfile(req, res, next) {
    try {
      const user = req.user;
      return res.status(202).json({
        statusCode: 202,
        success: true,
        message: "your login is fully",
        user,
      });
    } catch (error) {
      next(error);
    }
  }
  editProfile() {}
  addSkills() {}
  editSkills() {}
  acceptInviteToTeam() {}
  rejectIviteToTeam() {}
}
module.exports = {
  UserController: new UserController(),
};
