# Session Middleware (express-session)

## What is session middleware?
Session middleware stores user data on the server
and identifies users using a session ID stored in cookies.

## Why we use it?
- Maintain user login state
- Avoid sending credentials on every request
- Useful for traditional web apps

## How it works?
1. User logs in
2. Server creates a session
3. Session ID stored in browser cookie
4. Cookie sent with every request
5. Server identifies the user

## Where it is used?
- Authentication systems
- Admin panels
- Server-rendered apps

## Important options
- secret: encrypts session ID
- resave: avoid unnecessary saves
- saveUninitialized: save empty sessions
- cookie.maxAge: session expiry time

## Pros
- Simple to implement
- Good for server-rendered apps

## Cons
- Not scalable without store (Redis)
- Server memory usage increases

## Interview tip
Sessions are stateful, JWT is stateless.
