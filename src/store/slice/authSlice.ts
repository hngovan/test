import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { readToken, deleteToken, persistToken, deleteAdmin } from '@/services/localStorage.service'
import { login, LoginRequest } from '@/api/auth.api'
import { setAdmin } from './adminSlice'

export interface AuthSlice {
  token: string | null
}

const initialState: AuthSlice = {
  token: readToken()
}

export const doLogin = createAsyncThunk<string, LoginRequest, object>(
  'auth/doLogin',
  async (loginPayload: LoginRequest, { dispatch }) =>
    login(loginPayload).then(res => {
      dispatch(setAdmin(res.admin))
      persistToken(res.token)

      return res.token
    })
)

export const doLogout = createAsyncThunk<void, void, object>('auth/doLogout', (_, { dispatch }) => {
  deleteToken()
  deleteAdmin()
  dispatch(setAdmin(null))
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload
    })
    builder.addCase(doLogout.fulfilled, state => {
      state.token = ''
    })
  }
})

export default authSlice.reducer
