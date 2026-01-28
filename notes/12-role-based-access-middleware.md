



# Role-Based Access Control (RBAC)

## What is RBAC?
RBAC restricts access to routes based
on the role of the authenticated user.

## Why use RBAC?
- Secure admin routes
- Separate user privileges
- Prevent unauthorized actions

## How it works?
1. User authenticates (JWT/session)
2. User role is attached to request
3. Role middleware checks permission
4. Allows or blocks request

## Where it is used?
- Admin dashboards
- Fintech apps
- CMS systems
- Enterprise backends

## RBAC vs Auth
- Auth → who the user is
- RBAC → what the user can do

## Important points
- Always use after auth middleware
- Roles should come from DB/token
- Avoid hardcoding roles everywhere

## Common mistakes
- Skipping auth before role check
- Mixing role logic inside controllers

## Interview one-liner
Role-based middleware ensures users
can access only what their role permits.
