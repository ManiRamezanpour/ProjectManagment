const Application = require("./app/Config/Server");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI;
new Application(PORT, DB_URI);
