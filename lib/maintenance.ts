/**
 * Maintenance mode configuration
 *
 * This file provides utilities for checking and managing maintenance mode.
 * In a real application, you might store this configuration in a database
 * or a configuration service.
 */

// Check if maintenance mode is enabled
export function isMaintenanceMode(): boolean {
  return process.env.MAINTENANCE_MODE === "true"
}

// Get the estimated completion time for maintenance
export function getMaintenanceEndTime(): string | null {
  return process.env.MAINTENANCE_END_TIME || null
}

// Get maintenance details
export function getMaintenanceDetails(): {
  isActive: boolean
  endTime: string | null
  reason: string | null
} {
  return {
    isActive: isMaintenanceMode(),
    endTime: getMaintenanceEndTime(),
    reason: process.env.MAINTENANCE_REASON || null,
  }
}
