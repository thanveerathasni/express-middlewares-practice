const csrf = require("csurf");

// CSRF protection using cookies
const csrfProtection = csrf({
  cookie: true
});

module.exports = csrfProtection;
