/**
 * Security Logging
 *
 * Log security-related events for audit trails.
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export interface LogEntry {
  timestamp: string
  level: LogLevel
  message: string
  userId?: string
  ipAddress?: string
  metadata?: Record<string, unknown>
}

/**
 * Log security event
 */
export function logSecurityEvent(
  level: LogLevel,
  message: string,
  metadata?: Record<string, unknown>
): void {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    metadata,
  }

  // In production, send to logging service
  if (level === LogLevel.ERROR || level === LogLevel.WARN) {
    console.error(`[${entry.level}] ${entry.message}`, entry.metadata)
  } else {
    console.log(`[${entry.level}] ${entry.message}`, entry.metadata)
  }
}

/**
 * Log authentication event
 */
export function logAuthEvent(
  action: 'login' | 'logout' | 'signup' | 'failed_login',
  userId?: string,
  metadata?: Record<string, unknown>
): void {
  logSecurityEvent(LogLevel.INFO, `Authentication: ${action}`, {
    userId,
    ...metadata,
  })
}

/**
 * Log authorization event
 */
export function logAuthorizationEvent(
  action: string,
  userId: string,
  resource: string,
  allowed: boolean
): void {
  logSecurityEvent(allowed ? LogLevel.INFO : LogLevel.WARN, `Authorization: ${action}`, {
    userId,
    resource,
    allowed,
  })
}
