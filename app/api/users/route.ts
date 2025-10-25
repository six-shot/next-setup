import { NextResponse } from 'next/server'
import { mockUsers } from '@/lib/mock-data'

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: mockUsers,
      count: mockUsers.length,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 })
  }
}
