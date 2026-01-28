# Middleware Execution Order

## What is middleware execution order?
Middleware functions in Express execute in the order
they are defined in the code.

## General rule
Top → Bottom

## Order of execution
1. Global middleware (app.use)
2. Route-level middleware
3. Route handler
4. Error-handling middleware (last)

## Important points
- Order matters in Express
- If next() is not called, execution stops
- Error middleware must be at the end
- Route middleware only runs for that route

## Common mistakes
- Defining middleware after routes
- Forgetting next()
- Placing error middleware in the middle

## Interview tip
If asked "How middleware works?",
always mention **order and next()**.
