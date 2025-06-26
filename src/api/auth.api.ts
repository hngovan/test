import { AdminModel } from '@/types/models/AdminModel'
import httpApi from '@/utils/http'

export interface LoginRequest {
  email: string
  password: string
  remember: boolean
}

export interface LoginResponse {
  token: string
  admin: AdminModel
}

export interface SignUpRequest {
  first_name: string
  last_name: string
  email: string
  password: string
}

export interface ResetPasswordRequest {
  email: string
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi.post<LoginResponse>('login', { ...loginPayload }).then(({ data }) => data)

export const signUp = (signUpData: SignUpRequest): Promise<unknown> =>
  httpApi.post<unknown>('signUp', { ...signUpData }).then(({ data }) => data)

export const resetPassword = (resetPasswordPayload: ResetPasswordRequest): Promise<unknown> =>
  httpApi.post<unknown>('forgotPassword', { ...resetPasswordPayload }).then(({ data }) => data)
