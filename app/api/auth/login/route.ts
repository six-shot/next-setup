/**
 * Login API Route
 *
 * POST /api/auth/login
 * Authenticates a user and returns a session token.
 */

import { type NextRequest, NextResponse } from 'next/server'
import { isValidEmail } from '@/lib/auth/utils'
import { isRateLimited } from '@/lib/security/rate-limit'
import { logAuthEvent } from '@/lib/security/logging'
import { validateUserInput } from '@/lib/security/validation'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (isRateLimited(`login:${ip}`, 5, 15 * 60 * 1000)) {
      logAuthEvent('failed_login', undefined, { reason: 'rate_limited', ip })
      return NextResponse.json({ error: 'Too many login attempts' }, { status: 429 })
    }

    const body = await request.json()

    // Validation
    const errors = validateUserInput(body)
    if (errors.length > 0) {
      return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 })
    }

    const { email, password } = body

    if (!isValidEmail(email) || !password) {
      logAuthEvent('failed_login', undefined, { reason: 'invalid_credentials' })
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    // TODO: Verify credentials against database
    // const user = await getUserByEmail(email)
    // if (!user || !verifyPassword(password, user.password_hash)) {
    //   logAuthEvent('failed_login', undefined, { reason: 'invalid_credentials' })
    //   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    // }

    // Mock successful login
    const mockUser = {
      id: '1',
      email,
      name: 'Test User',
      role: 'user' as const,
    }

    logAuthEvent('login', mockUser.id)

    return NextResponse.json({
      success: true,
      user: mockUser,
      token: 'mock-token-' + Date.now(),
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
