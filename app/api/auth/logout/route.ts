/**
 * Logout API Route
 *
 * POST /api/auth/logout
 * Invalidates the user's session.
 */

import { type NextRequest, NextResponse } from 'next/server'
import { logAuthEvent } from '@/lib/security/logging'

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '')

    if (token) {
      // TODO: Invalidate token in database
      // await invalidateSession(token)
      logAuthEvent('logout')
    }

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
