import { ADMIN_ACCESS_TOKEN, ADMIN_INFO } from '@/constants/authentication'
import { AdminModel } from '@/types/models/AdminModel'

const testAdmin: AdminModel = {
  id: 1,
  first_name: 'Chris',
  last_name: 'Johnson',
  email: 'chris.johnson@altence.com',
  username: '@chris.johnson',
  avatar: ''
}

export const persistToken = (token: string): void => {
  localStorage.setItem(ADMIN_ACCESS_TOKEN, token)
}

export const persistAdmin = (user: AdminModel): void => {
  localStorage.setItem(ADMIN_INFO, JSON.stringify(user))
}

export const readToken = (): string => {
  return localStorage.getItem(ADMIN_ACCESS_TOKEN) || 'bearerToken'
}

export const readInfo = (): AdminModel | null => {
  // const infoStr = localStorage.getItem(ADMIN_INFO)

  // return infoStr ? JSON.parse(infoStr) : testAdmin
  return testAdmin
}

export const deleteToken = (): void => localStorage.removeItem(ADMIN_ACCESS_TOKEN)
export const deleteAdmin = (): void => localStorage.removeItem(ADMIN_INFO)
