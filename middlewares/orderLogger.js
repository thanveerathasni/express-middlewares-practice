const orderLogger = (label) => {
  return (req, res, next) => {
    console.log(`Middleware executed: ${label}`);
    next();
  };
};

module.exports = orderLogger;
