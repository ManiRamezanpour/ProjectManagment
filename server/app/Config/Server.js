const mongoose = require("mongoose");
require("dotenv").config();
module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URI) {
    this.configApplication();
    this.createServer(PORT);
    this.configDatabase(DB_URI);
    this.createRoutes();
    this.errorHandler();
  }
  configApplication() {
    const path = require("path");
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`Server Run > on http://localhost:${PORT}`);
    });
  }
  configDatabase(DB_URI) {
    mongoose.connect(DB_URI).catch((error) => {
      console.log(error);
      console.log("DB connected ...");
    });
  }
  createRoutes() {
    console.log("Test route");
    this.#app.get("/", function (req, res) {
        console.log("test");
        return res.json({
          message: "The route Founded",
        });
      });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Route Not Found",
      });
      next();
    });
    this.#app.use((error, req, res, next) => {
      const stauts = error?.status || 500;
      const message = error?.message || "Internal Server Error";
      return res.status(stauts).json({
        status: stauts,
        success: false,
        message: message,
      });
      next();
    });
  }
};
