/**
 * Input Validation
 *
 * Validation functions for common input types.
 */

export interface ValidationError {
  field: string
  message: string
}

/**
 * Validate user input
 */
export function validateUserInput(data: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' })
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Valid email is required' })
  }

  return errors
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/[&]/g, '&amp;') // Escape ampersands
    .trim()
}

/**
 * Validate pagination parameters
 */
export function validatePagination(page?: unknown, limit?: unknown) {
  const pageNum = typeof page === 'string' ? Number.parseInt(page, 10) : 1
  const limitNum = typeof limit === 'string' ? Number.parseInt(limit, 10) : 10

  return {
    page: Math.max(1, pageNum),
    limit: Math.min(100, Math.max(1, limitNum)),
  }
}
