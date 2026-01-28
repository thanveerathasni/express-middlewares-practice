const express = require("express");
const audit = require("../middlewares/audit");

const app = express();

// fake user injection
app.use((req, res, next) => {
  req.user = { id: "user123" };
  next();
});

app.post("/delete-account", audit("DELETE_ACCOUNT"), (req, res) => {
  res.send("Account deleted");
});

app.listen(3000, () => {
  console.log("Audit example running on port 3000");
});
