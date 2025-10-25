/**
 * Database Query Functions
 *
 * This file contains reusable database query functions.
 * These are placeholder implementations that will be replaced with actual database calls.
 */

import type { UserRecord, ActivityRecord } from './schema'
import { mockUsers, mockActivityLog } from '@/lib/mock-data'

/**
 * User Queries
 */

export async function getUserById(id: string): Promise<UserRecord | null> {
  // TODO: Replace with actual database query
  const user = mockUsers.find((u) => u.id === id)
  return user
    ? {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        created_at: user.createdAt,
        updated_at: user.createdAt,
      }
    : null
}

export async function getUserByEmail(email: string): Promise<UserRecord | null> {
  // TODO: Replace with actual database query
  const user = mockUsers.find((u) => u.email === email)
  return user
    ? {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        created_at: user.createdAt,
        updated_at: user.createdAt,
      }
    : null
}

export async function getAllUsers(): Promise<UserRecord[]> {
  // TODO: Replace with actual database query
  return mockUsers.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    created_at: u.createdAt,
    updated_at: u.createdAt,
  }))
}

export async function createUser(
  data: Omit<UserRecord, 'id' | 'created_at' | 'updated_at'>
): Promise<UserRecord> {
  // TODO: Replace with actual database query
  const newUser: UserRecord = {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
  return newUser
}

export async function updateUser(
  id: string,
  data: Partial<Omit<UserRecord, 'id' | 'created_at'>>
): Promise<UserRecord | null> {
  // TODO: Replace with actual database query
  const user = await getUserById(id)
  if (!user) return null
  return {
    ...user,
    ...data,
    updated_at: new Date().toISOString(),
  }
}

export async function deleteUser(id: string): Promise<boolean> {
  // TODO: Replace with actual database query
  return true
}

/**
 * Activity Queries
 */

export async function getActivityLog(limit = 10): Promise<ActivityRecord[]> {
  // TODO: Replace with actual database query
  return mockActivityLog.slice(0, limit).map((activity, idx) => ({
    id: idx.toString(),
    user_id: '1',
    action: activity.action,
    resource_type: 'general',
    created_at: new Date().toISOString(),
  }))
}

export async function createActivityLog(
  data: Omit<ActivityRecord, 'id' | 'created_at'>
): Promise<ActivityRecord> {
  // TODO: Replace with actual database query
  return {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    created_at: new Date().toISOString(),
  }
}
