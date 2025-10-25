/**
 * Authentication Types
 */

export interface AuthUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

export interface AuthSession {
  user: AuthUser
  token: string
  expiresAt: Date
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message?: string
  user?: AuthUser
  token?: string
}
