const express = require("express");
const jwt = require("jsonwebtoken");
const adminRoutes = require("../routes/adminRoutes");

const app = express();

// fake login for USER
app.get("/login/user", (req, res) => {
  const token = jwt.sign(
    { id: 1, role: "user" },
    "secret-key",
    { expiresIn: "5m" }
  );
  res.json({ token });
});

// fake login for ADMIN
app.get("/login/admin", (req, res) => {
  const token = jwt.sign(
    { id: 2, role: "admin" },
    "secret-key",
    { expiresIn: "5m" }
  );
  res.json({ token });
});

// admin routes
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Role middleware example running on port 3000");
});
