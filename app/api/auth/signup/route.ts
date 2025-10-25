/**
 * Signup API Route
 *
 * POST /api/auth/signup
 * Creates a new user account.
 */

import { type NextRequest, NextResponse } from 'next/server'
import { isValidEmail, isStrongPassword } from '@/lib/auth/utils'
import { isRateLimited } from '@/lib/security/rate-limit'
import { logAuthEvent } from '@/lib/security/logging'
import { validateUserInput } from '@/lib/security/validation'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (isRateLimited(`signup:${ip}`, 3, 60 * 60 * 1000)) {
      return NextResponse.json({ error: 'Too many signup attempts' }, { status: 429 })
    }

    const body = await request.json()

    // Validation
    const errors = validateUserInput(body)
    if (errors.length > 0) {
      return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 })
    }

    const { email, password, name } = body

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    if (!isStrongPassword(password)) {
      return NextResponse.json(
        {
          error: 'Password must be at least 8 characters with uppercase, lowercase, and numbers',
        },
        { status: 400 }
      )
    }

    // TODO: Check if user already exists
    // const existingUser = await getUserByEmail(email)
    // if (existingUser) {
    //   return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    // }

    // TODO: Create user in database
    // const user = await createUser({
    //   email,
    //   name,
    //   password_hash: hashPassword(password),
    //   role: 'user'
    // })

    // Mock successful signup
    const mockUser = {
      id: 'new-user-' + Date.now(),
      email,
      name,
      role: 'user' as const,
    }

    logAuthEvent('signup', mockUser.id)

    return NextResponse.json(
      {
        success: true,
        user: mockUser,
        token: 'mock-token-' + Date.now(),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
