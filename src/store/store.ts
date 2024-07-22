import { configureStore } from '@reduxjs/toolkit'
import { errorLoggingMiddleware } from './middlewares/errorLogging.middleware'
import rootReducer from './slice'

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
