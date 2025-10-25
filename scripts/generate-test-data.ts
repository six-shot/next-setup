/**
 * Generate Test Data Script
 *
 * Generates realistic test data for development and testing.
 * Run with: npm run generate:test-data
 */

import fs from 'fs'
import path from 'path'

interface TestUser {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  createdAt: string
}

interface TestActivity {
  id: string
  userId: string
  action: string
  resourceType: string
  timestamp: string
}

function generateUsers(count: number): TestUser[] {
  const firstNames = ['Alice', 'Bob', 'Carol', 'David', 'Emma', 'Frank', 'Grace', 'Henry']
  const lastNames = ['Johnson', 'Smith', 'White', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore']

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    name: `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`,
    email: `user${i + 1}@example.com`,
    role: i === 0 ? 'admin' : 'user',
    createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0],
  }))
}

function generateActivities(userCount: number, count: number): TestActivity[] {
  const actions = [
    'User logged in',
    'User logged out',
    'User created',
    'User updated',
    'System backup completed',
    'Database optimization performed',
    'Security audit completed',
    'Configuration changed',
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    userId: ((i % userCount) + 1).toString(),
    action: actions[i % actions.length],
    resourceType: ['auth', 'user', 'system', 'database'][i % 4],
    timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
  }))
}

async function generateTestData() {
  console.log('Generating test data...')

  const users = generateUsers(50)
  const activities = generateActivities(50, 200)

  const testDataDir = path.join(process.cwd(), '__tests__', 'fixtures')

  if (!fs.existsSync(testDataDir)) {
    fs.mkdirSync(testDataDir, { recursive: true })
  }

  fs.writeFileSync(path.join(testDataDir, 'users.json'), JSON.stringify({ users }, null, 2))
  fs.writeFileSync(
    path.join(testDataDir, 'activities.json'),
    JSON.stringify({ activities }, null, 2)
  )

  console.log(`Generated ${users.length} users`)
  console.log(`Generated ${activities.length} activities`)
  console.log('Test data generated successfully!')
}

generateTestData().catch(console.error)
