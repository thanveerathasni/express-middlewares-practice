const express = require("express");
const timeout = require("../middlewares/timeout");

const app = express();

// apply timeout globally (2 seconds)
app.use(timeout(2000));

// slow route
app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("Slow response finished");
  }, 5000);
});

// fast route
app.get("/fast", (req, res) => {
  res.send("Fast response");
});

app.listen(3000, () => {
  console.log("Timeout example running on port 3000");
});
