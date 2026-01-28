# Logger Middleware

## What is it?
Logger middleware logs request details like method and URL.

## Why we use it?
- Debugging
- Monitoring requests
- Tracking API usage

## How it works?
- Runs before route handler
- Prints request info
- Calls next() to continue flow

## Where it is used?
- Application-level middleware
- Mostly in backend servers

## Key points
- Must call next()
- Runs on every request
- Helps in debugging
