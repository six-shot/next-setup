export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  createdAt: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  count?: number
}

export interface ActivityLog {
  action: string
  timestamp: string
}
