/**
 * Validation Unit Tests
 */

import { isValidEmail, sanitizeString, validatePagination } from '@/lib/security/validation'

describe('Validation Utils', () => {
  describe('isValidEmail', () => {
    it('should validate email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('invalid')).toBe(false)
    })
  })

  describe('sanitizeString', () => {
    it('should remove dangerous characters', () => {
      expect(sanitizeString("<script>alert('xss')</script>")).toBe("scriptalert('xss')/script")
      expect(sanitizeString('normal text')).toBe('normal text')
    })
  })

  describe('validatePagination', () => {
    it('should return default values for invalid input', () => {
      const result = validatePagination(undefined, undefined)
      expect(result.page).toBe(1)
      expect(result.limit).toBe(10)
    })

    it('should enforce minimum and maximum limits', () => {
      const result = validatePagination('0', '200')
      expect(result.page).toBe(1)
      expect(result.limit).toBe(100)
    })
  })
})
