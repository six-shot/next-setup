/**
 * Authentication Unit Tests
 */

import { isValidEmail, isStrongPassword, hashPassword, verifyPassword } from '@/lib/auth/utils'

describe('Authentication Utils', () => {
  describe('isValidEmail', () => {
    it('should validate correct email format', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('should reject invalid email format', () => {
      expect(isValidEmail('invalid.email')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
    })
  })

  describe('isStrongPassword', () => {
    it('should accept strong passwords', () => {
      expect(isStrongPassword('SecurePass123')).toBe(true)
      expect(isStrongPassword('MyPassword456')).toBe(true)
    })

    it('should reject weak passwords', () => {
      expect(isStrongPassword('weak')).toBe(false)
      expect(isStrongPassword('nouppercasehere123')).toBe(false)
      expect(isStrongPassword('NOLOWERCASE123')).toBe(false)
      expect(isStrongPassword('NoNumbers')).toBe(false)
    })
  })

  describe('Password Hashing', () => {
    it('should hash passwords consistently', () => {
      const password = 'TestPassword123'
      const hash1 = hashPassword(password)
      const hash2 = hashPassword(password)
      expect(hash1).toBe(hash2)
    })

    it('should verify correct passwords', () => {
      const password = 'TestPassword123'
      const hash = hashPassword(password)
      expect(verifyPassword(password, hash)).toBe(true)
    })

    it('should reject incorrect passwords', () => {
      const password = 'TestPassword123'
      const hash = hashPassword(password)
      expect(verifyPassword('WrongPassword', hash)).toBe(false)
    })
  })
})
