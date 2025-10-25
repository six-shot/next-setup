import type { Metadata } from 'next'
import { UserList } from '@/components/dashboard/user-list'

export const metadata: Metadata = {
  title: 'Users',
  description: 'Manage users',
}

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">Manage and view all system users</p>
        </div>
        <UserList />
      </div>
    </div>
  )
}
