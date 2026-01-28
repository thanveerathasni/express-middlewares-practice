const authMiddleware = (req, res, next) => {
  // simulate login check
  const isLoggedIn = req.headers.authorization === "Bearer valid-token";

  if (!isLoggedIn) {
    return res.status(401).json({
      message: "Unauthorized: Please login first"
    });
  }

  next(); // allow request to continue
};

module.exports = authMiddleware;
