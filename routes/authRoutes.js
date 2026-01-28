const express = require("express");
const { z } = require("zod");
const validate = require("../middlewares/validate");

const router = express.Router();

// validation schema
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

// route with validation middleware
router.post(
  "/register",
  validate(registerSchema),
  (req, res) => {
    res.json({
      message: "User registered successfully",
      data: req.body
    });
  }
);

module.exports = router;
