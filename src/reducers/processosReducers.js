import {
  PROCESSOS_UPDATE_SUCCESS,
  PROCESSOS_UPDATE_RESET,
} from '../constants/processosConstants'

// dispatch({
//   type: PROCESSOS_UPDATE_SUCCESS,
//   payload: data,
// })
// localStorage.setItem('userProcessos', JSON.stringify(data))

const userProcessosReducer = (state = {}, action) => {
  switch (action.type) {
    case PROCESSOS_UPDATE_SUCCESS:
      return { ...action.payload }
    case PROCESSOS_UPDATE_RESET:
      return {}
    default:
      return state
  }
}

export default userProcessosReducer
