const timeout = (ms) => {
  return (req, res, next) => {
    const timer = setTimeout(() => {
      if (!res.headersSent) {
        res.status(503).json({
          message: "Request timeout"
        });
      }
    }, ms);

    // clear timer when response finishes
    res.on("finish", () => {
      clearTimeout(timer);
    });

    next();
  };
};

module.exports = timeout;
