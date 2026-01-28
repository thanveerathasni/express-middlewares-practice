const { body, validationResult } = require("express-validator");

const sanitizeUserInput = [
  body("*").trim().escape(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid input",
        errors: errors.array()
      });
    }
    next();
  }
];

module.exports = sanitizeUserInput;
