# Request Timeout Middleware

## What is timeout middleware?
Timeout middleware limits how long a request
is allowed to run before being terminated.

## Why use it?
- Prevent hanging requests
- Improve server stability
- Protect from slow APIs or DB calls

## How it works?
1. Request starts
2. Timer is created
3. If response finishes in time → timer cleared
4. If not → timeout response sent

## Where it is used?
- External API calls
- Heavy database operations
- Microservices

## Important points
- Should be used carefully
- Timeout value depends on use case
- Must clean timers to avoid memory leaks

## Common mistakes
- Very low timeout values
- Forgetting to clear timers
- Using timeout for all routes blindly

## Interview one-liner
Timeout middleware prevents long-running
requests from blocking the server.
