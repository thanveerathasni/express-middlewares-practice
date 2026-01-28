# Auth Middleware

## What is it?
Auth middleware checks if a user is authenticated.

## Why we use it?
- Protect routes
- Prevent unauthorized access

## How it works?
- Checks authorization header
- Allows request if valid
- Blocks request if invalid

## Where it is used?
- Route-level middleware
- Protected APIs

## Key points
- Usually used with JWT/session
- Stops request-response cycle if unauthorized
