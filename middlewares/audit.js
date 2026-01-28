const audit = (action) => {
  return (req, res, next) => {
    const user = req.user ? req.user.id : "anonymous";

    const log = {
      user,
      action,
      method: req.method,
      path: req.originalUrl,
      time: new Date().toISOString()
    };

    console.log("[AUDIT]", log);

    next();
  };
};

module.exports = audit;
