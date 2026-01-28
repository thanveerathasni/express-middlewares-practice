# Request Validation Middleware

## What is request validation?
Request validation ensures incoming data
matches expected format before processing.

## Why use validation middleware?
- Prevent invalid data
- Improve API reliability
- Reduce runtime errors
- Improve security

## How it works?
1. Client sends request
2. Validation middleware checks request body
3. If valid → next()
4. If invalid → error response

## Why middleware (not controller)?
- Separation of concerns
- Cleaner controllers
- Reusable logic

## Where it is used?
- Register/Login APIs
- Form submissions
- Public APIs

## Zod advantages
- Type-safe
- Declarative schemas
- Clean error messages

## Common mistakes
- Validating inside controller
- Not validating request body
- Ignoring error details

## Interview one-liner
Validation middleware ensures only valid data
reaches business logic.
