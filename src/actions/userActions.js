import {
  PROCESSOS_UPDATE_RESET,
} from '../constants/processosConstants'

import {
  USER_LOGOUT,
} from '../constants/userConstants'

//
const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: PROCESSOS_UPDATE_RESET })
  localStorage.removeItem('userLogin')
  // localStorage.removeItem('userProcessos')
  document.location.href = '/'
}

export default userLogout
