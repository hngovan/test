import { configureStore } from '@reduxjs/toolkit'
import { errorLoggingMiddleware } from './middlewares/errorLogging.middleware'
import { themeReducer } from './slice/themeSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorLoggingMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
