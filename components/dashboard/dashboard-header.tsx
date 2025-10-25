'use client'

import { Button } from '@/components/ui/button'

export function DashboardHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your workspace</p>
        </div>
        <Button>New Item</Button>
      </div>
    </header>
  )
}
