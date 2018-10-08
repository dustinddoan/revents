import { LOGIN_USER, LOGOUT_USER } from './authContants'
import { closeModal } from '../modals/modalActions'

export const login = (creds) => {
  console.log('creds')

  return dispatch => {
    dispatch({type: LOGIN_USER, payload: {creds}})
    dispatch(closeModal())
  }
}

export const logout = () => {
  return {
    type: LOGOUT_USER
  }
}