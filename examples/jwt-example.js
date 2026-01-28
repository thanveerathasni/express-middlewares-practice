const express = require("express");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../middlewares/jwtAuth");

const app = express();

// login route (creates token)
app.get("/login", (req, res) => {
  const user = { id: 1, role: "user" };

  const token = jwt.sign(user, "secret-key", {
    expiresIn: "1m"
  });

  res.json({ token });
});

// protected route
app.get("/profile", jwtAuth, (req, res) => {
  res.json({
    message: "Protected profile data",
    user: req.user
  });
});

app.listen(3000, () => {
  console.log("JWT example running on port 3000");
});
