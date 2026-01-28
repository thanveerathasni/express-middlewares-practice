const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const csrfProtection = require("../middlewares/csrfProtection");

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "csrf-secret",
    resave: false,
    saveUninitialized: true
  })
);

// route to get CSRF token
app.get("/form", csrfProtection, (req, res) => {
  res.json({
    csrfToken: req.csrfToken()
  });
});

// protected POST route
app.post("/submit", csrfProtection, (req, res) => {
  res.json({
    message: "Form submitted successfully"
  });
});

app.listen(3000, () => {
  console.log("CSRF example running on port 3000");
});
