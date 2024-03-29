import { USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    // case USER_LOGIN_REQUEST:
    //   return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { ...action.payload }
    // case USER_LOGIN_FAIL:
    //   return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export default userLoginReducer
