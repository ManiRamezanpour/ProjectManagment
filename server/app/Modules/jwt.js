const jwt = require("jsonwebtoken");
function tokenGenerator(payload) {
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "365 days",
  });
  return token;
}
function tokenVerfication(token) {
  const result = jwt.verify(token, process.env.SECRET_KEY);
  if (!result?.username)
    throw { status: 404, message: "please login to account" };
  return result;
}
module.exports = { tokenGenerator, tokenVerfication };
