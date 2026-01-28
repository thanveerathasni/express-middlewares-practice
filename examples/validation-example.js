const express = require("express");
const authRoutes = require("../routes/authRoutes");

const app = express();

app.use(express.json());

// router-level validation
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Validation example running on port 3000");
});
