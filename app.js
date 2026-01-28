const express = require("express");
const logger = require("./middlewares/logger");
const authMiddleware = require("./middlewares/auth");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(logger);

// public route
app.get("/", (req, res) => {
  res.send("Public route");
});

// protected route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to dashboard");
});

// route that throws error
app.get("/crash", (req, res, next) => {
  const err = new Error("Something went wrong!");
  err.status = 500;
  next(err); // 👈 send error to error middleware
});

// ❗ error middleware MUST be last
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
