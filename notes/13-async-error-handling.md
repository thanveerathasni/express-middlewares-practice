# Async Error Handling in Express

## The problem
Express does not automatically catch errors
inside async route handlers.

## Common bad practice
Using try/catch in every controller.

## Solution
Use a higher-order async handler middleware
to catch errors and forward them to
centralized error middleware.

## How asyncHandler works
- Wraps async function
- Resolves promise
- Forwards error using next(err)

## Why this pattern is important
- Cleaner code
- Centralized error handling
- Scalable architecture

## Where it is used?
- Controllers
- Service layers
- Database calls

## Interview one-liner
Async handler middleware prevents unhandled
promise rejections in Express apps.
