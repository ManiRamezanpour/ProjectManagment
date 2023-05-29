const { UserModel } = require("../../Model/User.Model");
class UserController {
  async getProfile(req, res, next) {
    try {
      const user = req.user;
      user.profile_image =
        req.protocol +
        "://" +
        req.get("host") +
        "/" +
        user.profile_image.replace(/[\\\\]/gm, "/");
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
  async uploadProfileImage(req, res, next) {
    try {
      const userId = req.user._id;
      const filePath = req.file?.path?.substring(7);
      const result = await UserModel.updateOne(
        { _id: userId },
        { $set: { profile_image: filePath } }
      );
      if (result.modifiedCount == 0)
        throw { status: 400, message: "update not been finished" };
      return res.status(200).json({
        status: 200,
        success: true,
        message: "your profile image updated !",
      });
    } catch (error) {
      next(error);
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
