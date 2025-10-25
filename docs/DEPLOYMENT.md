# Deployment Guide

## Overview

This guide covers deployment strategies for different environments.

## Prerequisites

- GitHub account
- Vercel account (for Vercel deployment)
- Environment variables configured

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

**Steps:**

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

**Benefits:**

- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Serverless functions
- Built-in monitoring

### 2. Self-Hosted (Docker)

For self-hosted deployments:

**Dockerfile:**

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run:**

```bash
docker build -t production-app .
docker run -p 3000:3000 production-app
```

### 3. Traditional Server

For traditional server deployment:

1. SSH into server
2. Clone repository
3. Install dependencies
4. Build application
5. Start with PM2 or similar

```bash
git clone <repo>
cd production-app
npm install
npm run build
pm2 start npm --name "app" -- start
```

## Environment Variables

Create \`.env.production\` with production values:

```
NEXT_PUBLIC_APP_URL=https://yourdomain.com
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret
```

## Database Migration

Run migrations before deployment:

```bash
npm run migrate
```

## Monitoring

### Application Monitoring

- Vercel Analytics
- Custom logging
- Error tracking

### Performance Monitoring

- Core Web Vitals
- Page load times
- API response times

## Rollback Strategy

If deployment fails:

1. Revert to previous commit
2. Redeploy
3. Investigate issue
4. Fix and redeploy

## CI/CD Pipeline

GitHub Actions automatically:

- Runs tests
- Builds application
- Deploys to staging
- Deploys to production on merge

See \`.github/workflows/\` for configuration.
