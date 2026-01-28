const express = require("express");
const userRoutes = require("../routes/userRoutes");

const app = express();

// public route
app.get("/", (req, res) => {
  res.send("Public home page");
});

// router-level middleware applied here
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("Router-level middleware example running on port 3000");
});
