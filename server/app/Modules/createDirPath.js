const path = require("path");
const fs = require("fs");
function createUploadPath() {
  const d = new Date();
  const Year = "" + d.getFullYear();
  const Month = "" + d.getMonth();
  const Day = "" + d.getDay();
  const uploadPath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "uploads",
    Year,
    Month,
    Day
  );
  fs.mkdirSync(uploadPath, { recursive: true });
  return path.join("public", "uploads", Year, Month, Day);
}
module.exports = {
  createUploadPath,
};
