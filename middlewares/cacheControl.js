const cacheControl = (options = {}) => {
  const {
    noStore = true,
    maxAge = 0,
    isPrivate = true
  } = options;

  return (req, res, next) => {
    let value = [];

    if (noStore) value.push("no-store");
    if (isPrivate) value.push("private");
    if (maxAge > 0) value.push(`max-age=${maxAge}`);

    res.setHeader("Cache-Control", value.join(", "));
    next();
  };
};

module.exports = cacheControl;
