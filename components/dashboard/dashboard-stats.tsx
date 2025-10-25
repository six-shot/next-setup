'use client'

import { Card } from '@/components/ui/card'

const stats = [
  { label: 'Total Users', value: '2,543', change: '+12%' },
  { label: 'Active Sessions', value: '1,234', change: '+8%' },
  { label: 'Revenue', value: '$45,231', change: '+23%' },
  { label: 'Conversion Rate', value: '3.24%', change: '+0.5%' },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="p-6">
          <p className="text-sm text-muted-foreground">{stat.label}</p>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
          <p className="text-sm text-green-600 mt-2">{stat.change} from last month</p>
        </Card>
      ))}
    </div>
  )
}
