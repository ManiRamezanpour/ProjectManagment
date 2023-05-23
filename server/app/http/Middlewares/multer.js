const multer = require("multer");
const fs = require("fs");
const { createUploadPath } = require("../../Modules/createDirPath");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, createUploadPath());
  },
  filename: function (req, file, cb) {
    const fileType = path.extname(file?.originalname || "");
    cb(null, new Date() + fileType);
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
};
