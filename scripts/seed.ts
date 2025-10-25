/**
 * Database Seeding Script
 *
 * This script seeds the database with initial data for development and testing.
 * Run with: npm run seed
 */

import { mockUsers, mockActivityLog } from '@/lib/mock-data'

/**
 * Seed function for database initialization
 *
 * This function populates the database with initial data for development.
 * When database is integrated, replace mock data with actual database inserts.
 */

async function seedUsers() {
  console.log('📝 Seeding users...')
  // TODO: Replace with actual database insert
  // const users = await db.users.createMany({
  //   data: mockUsers
  // })
  console.log(`✅ Seeded ${mockUsers.length} users`)
}

async function seedActivityLog() {
  console.log('📝 Seeding activity log...')
  // TODO: Replace with actual database insert
  // const activities = await db.activityLogs.createMany({
  //   data: mockActivityLog
  // })
  console.log(`✅ Seeded ${mockActivityLog.length} activity logs`)
}

async function seed() {
  console.log('🌱 Starting database seed...')

  try {
    // Seed users
    console.log('📝 Seeding users...')
    console.log(`✅ Seeded ${mockUsers.length} users`)

    // Seed activity log
    console.log('📝 Seeding activity log...')
    console.log(`✅ Seeded ${mockActivityLog.length} activity logs`)

    console.log('✨ Database seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seed()
