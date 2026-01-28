# File Upload Middleware (Multer)

## What is file upload middleware?
Middleware that handles multipart/form-data
and processes uploaded files.

## Why use Multer?
- Handles file uploads easily
- Supports disk and memory storage
- Industry standard for Express

## How it works?
1. Client sends file
2. Multer intercepts request
3. Stores file on server
4. Attaches file info to req.file

## Where it is used?
- Profile image upload
- Product images
- Document upload systems

## Important options
- storage: where files are stored
- fileFilter: restrict file types
- limits: file size limits

## Common mistakes
- Not validating file type
- Forgetting uploads folder
- Allowing unlimited file size

## Interview one-liner
Multer middleware handles multipart file uploads
in Express applications.
