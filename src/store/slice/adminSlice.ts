import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit'
import { persistAdmin, readInfo } from '@/services/localStorage.service'
import { AdminModel } from '@/types/models/AdminModel'

export interface UserState {
  admin: AdminModel | null
}

const initialState: UserState = {
  admin: readInfo()
}

export const setAdmin = createAction<PrepareAction<AdminModel>>('admin/setAdmin', newAdmin => {
  persistAdmin(newAdmin)
  return newAdmin
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setAdmin, (state, action) => {
      state.admin = action.payload
    })
  }
})

export default adminSlice.reducer
