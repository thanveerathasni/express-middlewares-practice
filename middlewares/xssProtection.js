const xss = require("xss-clean");

/**
 * XSS protection middleware
 * Cleans user input coming from req.body, req.query, and req.params
 */
const xssProtection = xss();

module.exports = xssProtection;
