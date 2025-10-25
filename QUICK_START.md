# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server

# Testing
npm run test             # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Generate coverage report

# Code Quality
npm run lint             # Run ESLint
npm run type-check      # Run TypeScript check
npm run format           # Format code with Prettier

# Database
npm run seed             # Seed database with mock data
npm run migrate          # Run database migrations

# Data Generation
npm run generate:test-data  # Generate test data
```

## Project Pages

- **Home**: [http://localhost:3000](http://localhost:3000)
- **Dashboard**: [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
- **Users**: [http://localhost:3000/dashboard/users](http://localhost:3000/dashboard/users)
- **Login**: [http://localhost:3000/auth/login](http://localhost:3000/auth/login)
- **Signup**: [http://localhost:3000/auth/signup](http://localhost:3000/auth/signup)
- **Docs**: [http://localhost:3000/docs](http://localhost:3000/docs)

## API Endpoints

- **Health**: \`GET /api/health\`
- **Users**: \`GET /api/users\`
- **Login**: \`POST /api/auth/login\`
- **Signup**: \`POST /api/auth/signup\`
- **Logout**: \`POST /api/auth/logout\`

## Next Steps

1. Read \`README.md\` for detailed setup
2. Check \`docs/ARCHITECTURE.md\` for architecture overview
3. Review \`docs/API.md\` for API documentation
4. See \`docs/DEPLOYMENT.md\` for deployment options

## Troubleshooting

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**

```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**

```bash
npm run type-check
```

## Support

- Check documentation in \`docs/\` directory
- Review existing issues on GitHub
- Create a new issue with details

```

```
