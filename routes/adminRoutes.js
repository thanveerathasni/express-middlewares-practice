const express = require("express");
const jwtAuth = require("../middlewares/jwtAuth");
const roleCheck = require("../middlewares/roleCheck");

const router = express.Router();

// protect entire router
router.use(jwtAuth);

// only admins allowed
router.get(
  "/dashboard",
  roleCheck(["admin"]),
  (req, res) => {
    res.send("Welcome Admin Dashboard");
  }
);

module.exports = router;
