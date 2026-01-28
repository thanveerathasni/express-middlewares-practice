# XSS Protection Middleware

## What is XSS?
Cross-Site Scripting (XSS) is an attack where
malicious scripts are injected into trusted websites.

## What does XSS middleware do?
It sanitizes user input to remove malicious
HTML and JavaScript code.

## Why use XSS protection?
- Prevent script injection
- Protect users and browsers
- Improve application security

## How it works?
- Middleware scans incoming data
- Removes dangerous scripts
- Passes clean data forward

## Where it is used?
- Forms
- Comments
- Search APIs
- Any user-generated content

## XSS vs Sanitization
- Sanitization: general cleaning
- XSS middleware: focused on script attacks

## Important points
- Always use with validation
- Should run before routes
- Combine with Helmet for best security

## Common mistakes
- Relying only on frontend protection
- Skipping sanitization on APIs

## Interview one-liner
XSS protection middleware prevents malicious
scripts from being injected into applications.
