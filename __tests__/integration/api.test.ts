/**
 * API Integration Tests
 */

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await fetch('http://localhost:3000/api/health')
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.status).toBe('healthy')
      expect(data.version).toBeDefined()
    })
  })

  describe('GET /api/users', () => {
    it('should return list of users', async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })
  })
})
