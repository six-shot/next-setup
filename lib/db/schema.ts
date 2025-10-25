/**
 * Database Schema Definitions
 *
 * This file defines the database schema for the application.
 * When integrating with a database (Supabase, Neon, etc.), use these types.
 */

export interface UserRecord {
  id: string
  name: string
  email: string
  password_hash?: string
  role: 'admin' | 'user'
  created_at: string
  updated_at: string
}

export interface ActivityRecord {
  id: string
  user_id: string
  action: string
  resource_type: string
  resource_id?: string
  metadata?: Record<string, unknown>
  created_at: string
}

export interface SessionRecord {
  id: string
  user_id: string
  token: string
  expires_at: string
  created_at: string
}

export interface AuditLogRecord {
  id: string
  user_id?: string
  action: string
  resource: string
  changes?: Record<string, unknown>
  ip_address?: string
  user_agent?: string
  created_at: string
}
