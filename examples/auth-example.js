const express = require("express");
const auth = require("../middlewares/auth");

const app = express();

app.get("/public", (req, res) => {
  res.send("Public route");
});

app.get("/private", auth, (req, res) => {
  res.send("Protected route");
});

app.listen(3000, () => {
  console.log("Auth example running");
});
