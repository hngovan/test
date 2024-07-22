import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { readToken, deleteToken } from '@/services/localStorage.service'

export interface AuthSlice {
  token: string | null
}

const initialState: AuthSlice = {
  token: readToken()
}

const doLogout = createAsyncThunk('auth/doLogout', () => {
  return deleteToken()
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogout.fulfilled, state => {
      state.token = ''
    })
  }
})

export default authSlice.reducer
