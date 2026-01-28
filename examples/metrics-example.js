const express = require("express");
const metrics = require("../middlewares/metrics");

const app = express();

app.use(metrics);

app.get("/fast", (req, res) => {
  res.send("Fast response");
});

app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("Slow response");
  }, 2000);
});

app.listen(3000, () => {
  console.log("Metrics example running on port 3000");
});
