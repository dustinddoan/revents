import { LOGIN_USER, LOGOUT_USER } from './authContants'

const initialState = {
  currentUser: {}
}

export default function(state= initialState, action) {
  console.log('auth reducer:', action.payload)
  switch (action.type) {
    case LOGIN_USER:
      return {...state, authenticated: true, currentUser: action.payload.creds.email}
    case LOGOUT_USER:
      return {...state, authenticated: false, currentUser: {}}
    default:
      return state
  }
}