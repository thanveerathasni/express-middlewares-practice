# Input Sanitization Middleware

## What is input sanitization?
Input sanitization cleans user-provided data
to remove or escape harmful characters.

## Why use it?
- Prevent XSS attacks
- Protect database queries
- Improve application security

## How it works?
- Middleware intercepts request
- Cleans input fields
- Passes sanitized data forward

## Where it is used?
- Forms
- Search APIs
- Public endpoints
- Authentication routes

## Sanitization vs Validation
- Validation checks correctness
- Sanitization cleans the data

## Common sanitization techniques
- Trimming whitespace
- Escaping HTML
- Normalizing input

## Common mistakes
- Trusting client-side sanitization
- Sanitizing inside controllers
- Skipping sanitization on public routes

## Interview one-liner
Input sanitization middleware prevents
malicious user input from harming the application.
