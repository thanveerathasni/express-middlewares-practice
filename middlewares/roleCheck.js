const roleCheck = (allowedRoles = []) => {
  return (req, res, next) => {
    // assume req.user is already set by auth/JWT middleware
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Forbidden: You do not have access"
      });
    }

    next();
  };
};

module.exports = roleCheck;
