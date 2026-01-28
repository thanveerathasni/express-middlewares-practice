const express = require("express");
const asyncHandler = require("../middlewares/asyncHandler");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

app.get(
  "/async-error",
  asyncHandler(async (req, res) => {
    // simulate async failure
    throw new Error("Async error occurred");
  })
);

// centralized error middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Async error example running on port 3000");
});
