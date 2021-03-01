import {
  PROC_UPDATE_REQUEST,
  PROC_UPDATE_SUCCESS,
  PROC_UPDATE_FAIL,
  PROC_UPDATE_RESET,
} from '../constants/processoConstants'

export const userProcessoReducer = (state = {}, action) => {
  switch (action.type) {
    // case USER_PROCESSO_REQUEST:
    //   return { loading: true }
    // case USER_PROCESSO_SUCCESS:
    //   return { loading: false, userLogin: action.payload }
    case USER_PROCESSO_SUCCESS:
      // console.log('Dentro do Reducer', action.payload  )
      // return { userLogin: action.payload }
      return { ...action.payload }
    // case USER_PROCESSO_FAIL:
    //   return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
