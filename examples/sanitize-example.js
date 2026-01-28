const express = require("express");
const sanitize = require("../middlewares/sanitize");

const app = express();
app.use(express.json());

// route with sanitization middleware
app.post("/comment", sanitize, (req, res) => {
  res.json({
    message: "Comment received",
    sanitizedData: req.body
  });
});

app.listen(3000, () => {
  console.log("Sanitization example running on port 3000");
});
