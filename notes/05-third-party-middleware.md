# Third-Party Middleware

## What is third-party middleware?
Middleware created by other developers and installed via npm.

## Why we use it?
- Saves development time
- Well-tested and reliable
- Industry standard solutions

---

## Morgan Middleware

### What is it?
Morgan is a request logger middleware.

### Why use it?
- Logs HTTP requests
- Helps in debugging
- Shows response status and time

### Example
app.use(morgan("dev"))

---

## CORS Middleware

### What is it?
CORS allows requests from different origins.

### Why use it?
- Frontend and backend run on different ports/domains
- Prevents browser CORS errors

### Example
app.use(cors())

---

## Where it is used?
- Almost every production backend
- APIs consumed by frontend apps

---

## Important points
- Installed via npm
- Used with app.use()
- Runs before route handlers

---

## Common mistakes
- Forgetting to install the package
- Placing middleware after routes
