/**
 * Test Setup
 *
 * Configure test environment and global test utilities.
 */

// Mock environment variables for tests
process.env.NEXT_PUBLIC_APP_URL = 'http://localhost:3000'
process.env.NODE_ENV = 'test'

// Global test utilities
global.testUtils = {
  createMockUser: (overrides = {}) => ({
    id: 'test-user-1',
    name: 'Test User',
    email: 'test@example.com',
    role: 'user' as const,
    createdAt: new Date().toISOString(),
    ...overrides,
  }),

  createMockToken: () => 'mock-token-' + Date.now(),
}
