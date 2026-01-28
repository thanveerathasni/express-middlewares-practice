# CSRF Protection Middleware

## What is CSRF?
Cross-Site Request Forgery (CSRF) is an attack
where a user is tricked into performing
unwanted actions on a trusted site.

## Why use CSRF protection?
- Protect authenticated users
- Prevent forged form submissions
- Secure session-based applications

## How CSRF middleware works
1. Server generates a CSRF token
2. Token sent to client
3. Client sends token back with request
4. Server verifies token

## Where it is used?
- Forms
- Session-based authentication
- Traditional web apps

## CSRF vs XSS
- CSRF: tricks user into making requests
- XSS: injects malicious scripts

## Important points
- Mostly needed for session-based apps
- Not required for pure JWT APIs
- Token must be included in every POST/PUT/DELETE

## Common mistakes
- Forgetting to send token from frontend
- Using CSRF for stateless APIs

## Interview one-liner
CSRF middleware prevents unauthorized
actions by validating request origin.
