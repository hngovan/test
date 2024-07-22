import { ThemeType } from '@/interfaces/interfaces'
import { PrepareAction, createAction, createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: ThemeType
}

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

export const defaultTheme = (localStorage.getItem('theme') as ThemeType) || preferredTheme

localStorage.setItem('theme', defaultTheme)

const initialState: ThemeState = {
  theme: defaultTheme
}

export const setTheme = createAction<PrepareAction<ThemeType>>('theme/setTheme', (theme: ThemeType) => {
  localStorage.setItem('theme', theme)
  return {
    payload: theme
  }
})

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setTheme, (state, { payload }) => {
      state.theme = payload
    })
  }
})

export default themeSlice.reducer
