const express = require("express");
const cacheControl = require("../middlewares/cacheControl");

const app = express();

// no cache for sensitive routes
app.use("/dashboard", cacheControl({ noStore: true }));

// cache public route for 60 seconds
app.use(
  "/public",
  cacheControl({ noStore: false, maxAge: 60, isPrivate: false })
);

app.get("/dashboard", (req, res) => {
  res.send("Sensitive dashboard data");
});

app.get("/public", (req, res) => {
  res.send("Public data that can be cached");
});

app.listen(3000, () => {
  console.log("Cache-control example running on port 3000");
});
