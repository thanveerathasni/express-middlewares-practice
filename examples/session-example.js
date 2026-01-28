const express = require("express");
const session = require("express-session");

const app = express();

// session middleware
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1 minute
  })
);

// login route (sets session)
app.get("/login", (req, res) => {
  req.session.user = { name: "Thanvi" };
  res.send("User logged in, session created");
});

// protected route
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).send("Please login first");
  }

  res.send(`Welcome ${req.session.user.name}`);
});

// logout route
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out, session destroyed");
  });
});

app.listen(3000, () => {
  console.log("Session example running on port 3000");
});
