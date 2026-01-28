# Request ID Middleware

## What is request ID middleware?
Request ID middleware assigns a unique identifier
to every incoming HTTP request.

## Why use it?
- Debugging production issues
- Tracking logs per request
- Correlating frontend and backend logs

## How it works?
1. Request arrives
2. Middleware generates unique ID
3. ID attached to request object
4. ID sent in response headers

## Where it is used?
- Production APIs
- Microservices
- Distributed systems
- Logging systems

## Common header used
X-Request-Id

## Important points
- Must run early in middleware stack
- Used with logger middleware
- ID should be unique

## Common mistakes
- Generating ID inside controllers
- Not returning ID to client

## Interview one-liner
Request ID middleware helps trace
individual requests across logs.
