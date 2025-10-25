export const mockUsers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'user',
    createdAt: '2024-02-20',
  },
  {
    id: '3',
    name: 'Carol White',
    email: 'carol@example.com',
    role: 'user',
    createdAt: '2024-03-10',
  },
]

export const mockActivityLog = [
  {
    action: 'User Alice Johnson logged in',
    timestamp: '2 hours ago',
  },
  {
    action: 'New user registration: Bob Smith',
    timestamp: '5 hours ago',
  },
  {
    action: 'System backup completed successfully',
    timestamp: '1 day ago',
  },
  {
    action: 'Database optimization performed',
    timestamp: '2 days ago',
  },
  {
    action: 'Security audit completed',
    timestamp: '3 days ago',
  },
]

/**
 * Extended mock data for comprehensive testing
 */

export const mockStats = {
  totalUsers: 2543,
  activeSessions: 1234,
  revenue: 45231,
  conversionRate: 3.24,
}

export const mockChartData = [
  { month: 'Jan', value: 400 },
  { month: 'Feb', value: 300 },
  { month: 'Mar', value: 200 },
  { month: 'Apr', value: 278 },
  { month: 'May', value: 189 },
  { month: 'Jun', value: 239 },
]

export const mockNotifications = [
  {
    id: '1',
    title: 'New user signup',
    message: 'Alice Johnson signed up',
    timestamp: '5 minutes ago',
  },
  {
    id: '2',
    title: 'System alert',
    message: 'High memory usage detected',
    timestamp: '1 hour ago',
  },
  {
    id: '3',
    title: 'Backup completed',
    message: 'Daily backup completed successfully',
    timestamp: '2 hours ago',
  },
]
