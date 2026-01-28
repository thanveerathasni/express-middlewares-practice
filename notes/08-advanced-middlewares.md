# Advanced Middlewares

## What are advanced middlewares?
Middlewares that focus on security, performance,
and production readiness.

---

## Rate Limiting (express-rate-limit)

### What is it?
Limits number of requests from a client.

### Why use it?
- Prevent brute-force attacks
- Prevent API abuse
- Improve stability

### Example
Limits requests per minute.

---

## Helmet

### What is it?
Helmet sets secure HTTP headers.

### Why use it?
- Prevent XSS attacks
- Prevent clickjacking
- Improve app security

### Common headers added
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options

---

## Compression

### What is it?
Compresses HTTP responses using gzip.

### Why use it?
- Faster response
- Reduced bandwidth
- Better performance

---

## Where used?
- Production APIs
- Public-facing servers
- Enterprise backends

---

## Important points
- Should be applied globally
- Usually added before routes
- Very common in production

---

## Interview tip
Mention security + performance together
when talking about advanced middleware.
