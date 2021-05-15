import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import userLoginReducer from '../reducers/userReducers'
import userProcessosReducer from '../reducers/processosReducers'

// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
//   orderDeliverReducer,
//   orderListMyReducer,
//   orderListReducer,
// } from './reducers/orderReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userProcessos: userProcessosReducer
})

const userLogin = localStorage.getItem('userLogin')
  ? JSON.parse(localStorage.getItem('userLogin'))
  : {
      name: 'Convidado',
      email: 'convidado@pesquisajus.com.br',
      role: 'convidado',
      token: ''
    }

const userProcessos = {}

// const userProcessos = localStorage.getItem('userProcessos')
// ? JSON.parse(localStorage.getItem('userProcessos'))
// : {
//   processos: [],
// }

const initialState = {
  userLogin,
  userProcessos
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
