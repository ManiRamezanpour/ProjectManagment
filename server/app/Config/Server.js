const { AllRoutes } = require("../Router/Router");

module.exports = class Application {
  #express = require("express");
  #app = this.#express();
  constructor(PORT, DB_URI) {
    this.configDatabase(DB_URI);
    this.configApplication();
    this.createRoutes();
    this.createServer(PORT);
    this.errorHandler();
  }
  configApplication() {
    const path = require("path");
    const cors = require("cors");
    this.#app.use(this.#express.static(path.join(__dirname, "..", "public")));
    this.#app.use(this.#express.json());
    this.#app.use(this.#express.urlencoded({ extended: true }));
    this.#app.use(cors({ origin: true, credentials: true }));
  }
  createServer(PORT) {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(PORT, () => {
      console.log(`Server Run > On  http://localhost:${PORT}`);
    });
  }
  configDatabase(DB_URI) {
    const mongoose = require("mongoose");
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });
  }
  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Adress not found",
      });
    });
    this.#app.use((error, req, res, next) => {
      const status = error?.status || 500;
      const message = error?.message || "InternalServerError";
      return res.status(status).json({
        status,
        success: false,
        message,
      });
    });
  }
  createRoutes() {
    this.#app.get("/", (req, res, next) => {
      return res.json({
        message: "this is a new Express application",
      });
    });
    this.#app.use(AllRoutes);
  }
};
