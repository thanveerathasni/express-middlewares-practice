const express = require("express");
const logger = require("../middlewares/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("Logger middleware working");
});

app.listen(3000, () => {
  console.log("Logger example running");
});
