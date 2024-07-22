import { ADMIN_ACCESS_TOKEN } from '@/constants/authentication'

export const persistToken = (token: string): void => {
  localStorage.setItem(ADMIN_ACCESS_TOKEN, token)
}

export const readToken = (): string => {
  return localStorage.getItem(ADMIN_ACCESS_TOKEN) || 'bearerToken'
}

export const deleteToken = (): void => localStorage.removeItem(ADMIN_ACCESS_TOKEN)
