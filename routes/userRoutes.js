const express = require("express");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

/**
 * Router-level middleware
 * This middleware applies ONLY to this router
 */
router.use(authMiddleware);

// protected routes
router.get("/profile", (req, res) => {
  res.send("User profile page");
});

router.get("/settings", (req, res) => {
  res.send("User settings page");
});

module.exports = router;
