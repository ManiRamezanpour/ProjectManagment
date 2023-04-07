require("dotenv").config();
const Application = require("./app/Config/Server");
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
console.log(PORT);
console.log(DB_URI);
new Application(PORT,DB_URI)