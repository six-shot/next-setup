/**
 * Activity Server Actions
 *
 * Server-side functions for activity log operations.
 */

'use server'

import { revalidateTag } from 'next/cache'
import { getActivityLog, createActivityLog } from '@/lib/db'

/**
 * Fetch activity logs
 */
export async function fetchActivityLogs(limit = 10) {
  try {
    const activities = await getActivityLog(limit)
    return { success: true, data: activities }
  } catch (error) {
    console.error('Error fetching activity logs:', error)
    return { success: false, error: 'Failed to fetch activity logs' }
  }
}

/**
 * Log an activity
 */
export async function logActivity(data: {
  userId: string
  action: string
  resourceType: string
  resourceId?: string
  metadata?: Record<string, unknown>
}) {
  try {
    const activity = await createActivityLog({
      user_id: data.userId,
      action: data.action,
      resource_type: data.resourceType,
      resource_id: data.resourceId,
      metadata: data.metadata,
    })

    // Revalidate cache
    revalidateTag('activity')

    return { success: true, data: activity }
  } catch (error) {
    console.error('Error logging activity:', error)
    return { success: false, error: 'Failed to log activity' }
  }
}
