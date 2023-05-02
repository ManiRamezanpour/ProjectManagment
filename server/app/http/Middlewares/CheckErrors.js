const { validationResult } = require("express-validator");

function expressValidatorsMapper(req, res, next) {
  let message = {};
  const result = validationResult(req);
  if (result?.errors?.lenght > 0) {
    message = {};
    result?.errors.forEach((err) => {
      message[err.params] = err.message;
    });
    return res.status(400).json({ status: 400, success: false, message });
  }
  next();
}
module.exports = {
  expressValidatorsMapper,
};
