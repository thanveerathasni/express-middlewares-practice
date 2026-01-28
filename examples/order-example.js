const express = require("express");
const orderLogger = require("../middlewares/orderLogger");

const app = express();

// Global middleware
app.use(orderLogger("GLOBAL 1"));
app.use(orderLogger("GLOBAL 2"));

app.get(
  "/test",
  orderLogger("ROUTE LEVEL"),
  (req, res) => {
    res.send("Check console for execution order");
  }
);

// Error middleware (always last)
app.use((err, req, res, next) => {
  console.log("ERROR MIDDLEWARE");
  res.status(500).send("Error occurred");
});

app.listen(3000, () => {
  console.log("Order example running on port 3000");
});
