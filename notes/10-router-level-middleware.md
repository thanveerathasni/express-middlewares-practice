# Router-Level Middleware

## What is router-level middleware?
Router-level middleware is middleware that is applied
to a specific Express router instead of the entire app.

## Why use router-level middleware?
- Better code organization
- Avoid repeating middleware on every route
- Apply logic to specific modules only

## How it works?
- Create a router using express.Router()
- Apply middleware using router.use()
- Mount router using app.use()

## Example use cases
- Protect all user routes
- Admin authentication
- Role-based access control

## app.use vs router.use
- app.use → applies to whole application
- router.use → applies only to that router

## Important points
- Executes before route handlers
- Order matters inside router
- Can stack multiple middlewares

## Common mistakes
- Forgetting to export router
- Mounting router incorrectly
- Confusing app.use with router.use

## Interview one-liner
Router-level middleware allows applying middleware
to a group of related routes for better structure.
