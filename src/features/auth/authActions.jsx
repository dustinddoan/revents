import { LOGIN_USER, LOGOUT_USER } from './authContants'

export const login = (creds) => {
  console.log('creds')
  return {
    type: LOGIN_USER,
    payload: {
      creds
    }
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
}