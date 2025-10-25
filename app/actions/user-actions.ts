/**
 * User Server Actions
 *
 * Server-side functions for user operations.
 * These run on the server and can be called from client components.
 */

'use server'

import { revalidateTag } from 'next/cache'
import { getAllUsers, createUser, updateUser } from '@/lib/db'

/**
 * Fetch all users
 */
export async function fetchUsers() {
  try {
    const users = await getAllUsers()
    return { success: true, data: users }
  } catch (error) {
    console.error('Error fetching users:', error)
    return { success: false, error: 'Failed to fetch users' }
  }
}

/**
 * Create a new user
 */
export async function createUserAction(data: {
  name: string
  email: string
  role: 'admin' | 'user'
}) {
  try {
    // TODO: Verify authorization (admin only)

    const user = await createUser({
      name: data.name,
      email: data.email,
      role: data.role,
    })

    // Revalidate cache
    revalidateTag('users')

    return { success: true, data: user }
  } catch (error) {
    console.error('Error creating user:', error)
    return { success: false, error: 'Failed to create user' }
  }
}

/**
 * Update a user
 */
export async function updateUserAction(
  id: string,
  data: Partial<{
    name: string
    email: string
    role: 'admin' | 'user'
  }>
) {
  try {
    // TODO: Verify authorization

    const user = await updateUser(id, data)

    if (!user) {
      return { success: false, error: 'User not found' }
    }

    // Revalidate cache
    revalidateTag('users')

    return { success: true, data: user }
  } catch (error) {
    console.error('Error updating user:', error)
    return { success: false, error: 'Failed to update user' }
  }
}
