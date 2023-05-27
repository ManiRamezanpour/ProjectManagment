const { body } = require("express-validator");
const path = require("path");
function ImageValidators() {
  return [
    body("profileImage").custom((value, { req }) => {
      if (Object.keys(req.file).length == 0)
        throw { status: 400, mesage: "please upload file !" };
      const accpetedFileFormat = [".png", ".jpg", ".jpeg", ".HEIC", ".webpg"];
      const fileFormat = path.extname(req.file.originalname);
      if (!accpetedFileFormat.includes(fileFormat))
        throw { status: 400, message: "file format not accpeted !" };
      const maxSize = 2 * 1024 * 1024;
      if (req.file.size > maxSize)
        throw {
          status: 400,
          message: "file size cant be larger thanheavier 2mg",
        };
    }),
  ];
}
module.exports = {
  ImageValidators,
};
