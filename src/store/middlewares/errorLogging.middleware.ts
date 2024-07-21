import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'
import { notificationController } from '@/controllers/notificationController'

/**
 * Log a warning and show a toast!
 */
export const errorLoggingMiddleware: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    const errorMessage = typeof action.payload === 'string' ? action.payload : 'An unknown error occurred'
    notificationController.error({ message: errorMessage })
  }

  return next(action)
}
