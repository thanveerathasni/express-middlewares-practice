# Cache-Control Middleware

## What is cache-control middleware?
Cache-control middleware sets HTTP headers
that tell browsers and proxies how to cache responses.

## Why use it?
- Prevent caching sensitive data
- Improve performance for public content
- Control browser behavior

## How it works?
- Middleware sets Cache-Control header
- Browser follows caching rules

## Common directives
- no-store → never cache
- private → cache only in browser
- max-age → cache duration in seconds

## Where it is used?
- Login pages
- Dashboards
- Public APIs
- Static content

## Important points
- Sensitive routes should use no-store
- Public data can use max-age
- Often combined with auth middleware

## Common mistakes
- Caching sensitive data
- Forgetting cache headers
- Using same cache rules everywhere

## Interview one-liner
Cache-control middleware manages how
HTTP responses are cached by clients.
