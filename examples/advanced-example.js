const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

/**
 * Helmet middleware
 * Adds security headers
 */
app.use(helmet());

/**
 * Compression middleware
 * Compresses response bodies
 */
app.use(compression());

/**
 * Rate limiting middleware
 * Limits number of requests
 */
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute
  message: "Too many requests, try again later"
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Advanced middleware working");
});

app.listen(3000, () => {
  console.log("Advanced middleware example running on port 3000");
});
