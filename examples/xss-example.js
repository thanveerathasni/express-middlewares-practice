const express = require("express");
const xssProtection = require("../middlewares/xssProtection");

const app = express();

app.use(express.json());
app.use(xssProtection);

app.post("/feedback", (req, res) => {
  res.json({
    message: "Feedback received",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("XSS protection example running on port 3000");
});
