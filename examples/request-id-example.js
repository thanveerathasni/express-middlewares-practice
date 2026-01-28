const express = require("express");
const requestId = require("../middlewares/requestId");

const app = express();

app.use(requestId);

app.get("/", (req, res) => {
  res.json({
    message: "Request ID middleware working",
    requestId: req.requestId
  });
});

app.listen(3000, () => {
  console.log("Request ID example running on port 3000");
});
