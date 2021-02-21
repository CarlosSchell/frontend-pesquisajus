import axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  // USER_LOGIN_FAIL,
  // USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
  // USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_REQUEST,
} from '../constants/userConstants'

  // const url = 'https://www.api-pesquisajus.com.br/api/v1/users/register'
  const baseUrl = 'http://localhost:21115/v1/'


//import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'
// import { ChevronCompactLeft } from 'react-bootstrap-icons'

// export const login = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_LOGIN_REQUEST, })
//     const config = {headers: {'Content-Type': 'application/json',},}
//     const url = baseUrl + '/users/login'
//     const { data } = await axios.post(url, { email, password }, config)

//     const payloadData = data.data
//     console.log('Passou do Axios Entrou no Dispatch : ', payloadData)

//     dispatch({
//       type: USER_LOGIN_SUCCESS,
//       payload: payloadData,
//     })

//     console.log('Depois do Dispatch gravado no localStorage : ', payloadData)

//     localStorage.setItem('userLogin', JSON.stringify(payloadData))
//   } catch (error) {
//     dispatch({
//       type: USER_LOGIN_FAIL,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message,
//     })
//   }
// }

//
export const logout = () => (dispatch) => {
  localStorage.removeItem('userLogin')
  dispatch({ type: USER_LOGOUT })
  // dispatch({ type: USER_DETAILS_RESET })
  // dispatch({ type: ORDER_LIST_MY_RESET })
  // dispatch({ type: USER_LIST_RESET })
  document.location.href = '/'
  console.log('Usuario Saiu (log-out) ')
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = { headers: { 'Content-Type': 'application/json' } }
    const url = baseUrl + '/users/register'
    const { data } = await axios.post(
      url,
      { name, email, password },
      config
    )

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userLogin', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST })

    const {
      userLogin: { userLogin },
    } = getState()
    const config = { headers: { Authorization: `Bearer ${userLogin.token}` } }
    const url = baseUrl + '/users/'+id
    const { data } = await axios.get(url, config)

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({ type: USER_DETAILS_FAIL, payload: message })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    })

    const {
      userLogin: { userLogin },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogin.token}`,
      },
    }
    const url = baseUrl + '/users/profile'
    const { data } = await axios.put(url, user, config)

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
    localStorage.setItem('userLogin', JSON.stringify(data))
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    })

    const {
      userLogin: { userLogin },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userLogin.token}`,
      },
    }
    const url = baseUrl + '/users/'
    const { data } = await axios.get(url, config)

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    })
  }
}

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    })

    const {
      userLogin: { userLogin },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userLogin.token}`,
      },
    }
    const url = baseUrl + '/users/'+id
    await axios.delete(url, config)

    dispatch({ type: USER_DELETE_SUCCESS })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    })

    const {
      userLogin: { userLogin },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userLogin.token}`,
      },
    }

    const url = baseUrl + '/users/'+user.id
    const { data } = await axios.put(url, user, config)

    dispatch({ type: USER_UPDATE_SUCCESS })

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data })

    dispatch({ type: USER_DETAILS_RESET })
  } catch (error) {
    const message = error.response && error.response.data.message ? error.response.data.message : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    })
  }
}
