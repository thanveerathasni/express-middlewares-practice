# Express Middleware – Summary & Interview Cheat Sheet

---

## What is Middleware?
Middleware is a function that runs between
the request and response cycle in Express.

Request → Middleware(s) → Route → Response

---

## Types of Middleware

### 1. Built-in Middleware
- express.json()
- express.urlencoded()
- express.static()

Used for parsing requests and serving static files.

---

### 2. Custom Middleware
- Logger
- Auth check
- Request validation

Written by developers for custom logic.

---

### 3. Third-Party Middleware
- morgan
- cors
- express-session
- jsonwebtoken
- helmet
- compression
- express-rate-limit

Installed via npm.

---

### 4. Error-Handling Middleware
Special middleware with 4 parameters:
(err, req, res, next)

Must be defined at the end.

---

## Middleware Execution Order
1. Global middleware (app.use)
2. Route-level middleware
3. Route handler
4. Error-handling middleware

Order matters in Express.

---

## next() Function
- Passes control to the next middleware
- If not called, request stops
- next(err) triggers error middleware

---

## Session vs JWT

### Session
- Stateful
- Stored on server
- Uses cookies

### JWT
- Stateless
- Stored on client
- Used in APIs

---

## Advanced Middleware
- Helmet → Security headers
- Compression → Performance
- Rate limit → Abuse prevention

Used in production apps.

---

## Common Mistakes
- Forgetting next()
- Wrong middleware order
- Not handling errors
- Storing JWT in localStorage
- Committing node_modules

---

## Interview Questions & Answers

### Q: What is middleware?
A: A function that executes during the request-response lifecycle.

---

### Q: How does Express identify error middleware?
A: By the presence of four parameters.

---

### Q: Why is middleware order important?
A: Express executes middleware sequentially from top to bottom.

---

### Q: Difference between app.use and route middleware?
A: app.use applies globally; route middleware applies to specific routes.

---

### Q: Session vs JWT?
A: Session is stateful, JWT is stateless.

---

## Final Tip
Always explain middleware with:
- Order
- next()
- Real use cases

That shows real understanding.
