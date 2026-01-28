# JWT Authentication Middleware

## What is JWT?
JWT (JSON Web Token) is a stateless authentication mechanism
used to securely transmit user data between client and server.

## Why use JWT?
- Stateless authentication
- No server-side session storage
- Scales well for APIs

## How JWT middleware works
1. Client sends token in Authorization header
2. Middleware verifies token using secret key
3. If valid → request continues
4. If invalid → request blocked

## Where it is used?
- REST APIs
- Mobile apps
- Microservices
- MERN stack applications

## JWT vs Session
- JWT: stateless, token-based
- Session: stateful, server memory

## Important points
- Token usually stored in HttpOnly cookies or headers
- Token should have expiry
- Secret key must be protected

## Common mistakes
- Storing JWT in localStorage
- Not setting expiry
- Not handling token errors
