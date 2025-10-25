# API Reference

## Overview

This document describes all available API endpoints and their usage.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, the API does not require authentication. This will be implemented in future versions.

## Response Format

All responses follow a consistent format:

```json
{
  "success": true,
  "data": {},
  "error": null
}
```

## Endpoints

### Health Check

Check if the API is running and healthy.

**Request:**

```
GET /api/health
```

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2024-10-25T10:30:00Z",
  "version": "1.0.0"
}
```

### Get Users

Retrieve all users.

**Request:**

```
GET /api/users
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "role": "admin",
      "createdAt": "2024-01-15"
    }
  ],
  "count": 1
}
```

## Error Handling

Errors are returned with appropriate HTTP status codes:

- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`403\` - Forbidden
- \`404\` - Not Found
- \`500\` - Internal Server Error

## Rate Limiting

Rate limiting will be implemented in production. Current limits:

- 100 requests per minute per IP

## Versioning

API versioning will be implemented as \`/api/v1/\`, \`/api/v2/\`, etc.
