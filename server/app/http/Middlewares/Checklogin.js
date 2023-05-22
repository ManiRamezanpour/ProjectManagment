const { tokenVerfication } = require("../../Modules/jwt");
const {UserModel} = require("../../Model/User.Model");
async function checkLogin(req, res, next) {
  try {
    const authError = {
      status: 404,
      success: false,
      message: "please login to account",
    };
    const authHeader = req?.headers?.authorization;
    console.log(authHeader);
    if (!authHeader) throw authError;
    const token = authHeader.split(" ")?.[1];
    if (!token) throw authError;
    const resueltToken = tokenVerfication(token);
    const { username } = resueltToken;
    const user = await UserModel.findOne({ username }, { password: 0 });
    if (!user) throw { status: 404, message: "please login to account" };
    console.log(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = {
  checkLogin,
};
