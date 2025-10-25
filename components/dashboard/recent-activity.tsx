'use client'

import { Card } from '@/components/ui/card'
import { mockActivityLog } from '@/lib/mock-data'

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {mockActivityLog.slice(0, 5).map((activity, idx) => (
          <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-0">
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium">{activity.action}</p>
              <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
