const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

/**
 * Third-party middleware
 */

// logs request details
app.use(morgan("dev"));

// allows cross-origin requests
app.use(cors());

app.get("/", (req, res) => {
  res.send("Third-party middleware working");
});

app.listen(3000, () => {
  console.log("Third-party middleware example running on port 3000");
});
