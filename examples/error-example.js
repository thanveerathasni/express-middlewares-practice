const express = require("express");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

app.get("/error", (req, res, next) => {
  const err = new Error("Forced error");
  err.status = 500;
  next(err);
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Error middleware example running");
});
