const { UserModel } = require("../../Model/User.Model");
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
  async editProfile(req, res, next) {
    try {
      const data = { ...req.body };
      console.log(data);
      const userId = req.user._id;
      Object.entries(data).forEach(([key, value]) => {
        const feilds = ["firstname", "username", "skills"];
        const badValues = ["", " ", null, undefined, [], {}, 0, -1, NaN];
        if (!feilds.includes(key)) delete data[key];
        if (badValues.includes(value)) delete data[key];
      });

      const result = await UserModel.updateOne({ _id: userId }, { $set: data });
      if (result.modifiedCount > 0) {
        return res.status(200).json({
          status: 200,
          success: true,
          message: "account updated !!",
        });
      }
      throw { status: 400, message: "updated not finished !" };
    } catch (error) {
      next();
    }
  }
  addSkills() {}
  editSkills() {}
  acceptInviteToTeam() {}
  rejectIviteToTeam() {}
}
module.exports = {
  UserController: new UserController(),
};
