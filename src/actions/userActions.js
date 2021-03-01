import {
  PROCESSOS_UPDATE_RESET,
} from '../constants/processosConstants'

import {
  USER_LOGOUT,
} from '../constants/userConstants'

//
export const logout = () => (dispatch) => {
  localStorage.removeItem('userLogin')
  localStorage.removeItem('userProcessos')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: PROCESSOS_UPDATE_RESET })
  document.location.href = '/'
  console.log('Usuario Saiu (log-out) ')
}
