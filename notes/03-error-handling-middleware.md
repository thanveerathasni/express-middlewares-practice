# Error Handling Middleware

## What is it?
Error middleware handles application errors centrally.

## How Express identifies it?
It has 4 parameters:
(err, req, res, next)

## Why we use it?
- Prevent server crash
- Send clean error responses
- Centralized error handling

## Important rules
- Must be the last middleware
- Uses next(err)

## Key points
- Very important for production apps
