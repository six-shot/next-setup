/**
 * Activity Log API Route
 *
 * GET /api/activity - Get activity logs
 * POST /api/activity - Create activity log entry
 */

import { type NextRequest, NextResponse } from 'next/server'
import { getActivityLog, createActivityLog } from '@/lib/db'
import { validatePagination } from '@/lib/security/validation'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { page, limit } = validatePagination(searchParams.get('page'), searchParams.get('limit'))

    // TODO: Verify authorization (admin only)

    const activities = await getActivityLog(limit)

    return NextResponse.json({
      success: true,
      data: activities,
      pagination: { page, limit },
    })
  } catch (error) {
    console.error('Error fetching activity:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Verify authorization

    const activity = await createActivityLog({
      user_id: body.userId || 'unknown',
      action: body.action,
      resource_type: body.resourceType,
      resource_id: body.resourceId,
      metadata: body.metadata,
    })

    return NextResponse.json(
      {
        success: true,
        data: activity,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating activity:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
