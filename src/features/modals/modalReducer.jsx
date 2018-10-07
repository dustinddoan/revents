import { MODAL_OPEN, MODAL_CLOSE} from './modalConstants'
// import { createReducer } from '../../app/common/util/reducerUtil' 

const initialState = null;

// export const openModal = (state, payload) => {
//   const {modalType, modalProps} = payload
//   console.log('payload: ', payload)
    
//   return {modalType, modalProps}
// }

// export const closeModal = (state, payload) => {

//   return null
// }

// export default createReducer(initialState, {
//   [MODAL_OPEN]: openModal,
//   [MODAL_CLOSE]: closeModal
// })


export default function(state = initialState, action) {
  // console.log('action.type: ', action.type)
  // console.log('payload: ', action.payload)
  
  switch (action.type) {
    case MODAL_OPEN:
      return {...action.payload}
    case MODAL_CLOSE:
      return null
    default:
      return state
  }
}