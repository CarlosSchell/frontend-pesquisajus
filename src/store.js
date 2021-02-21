import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import {
//   productListReducer,
//   productDetailsReducer,
//   productDeleteReducer,
//   productCreateReducer,
//   productUpdateReducer,
//   productReviewCreateReducer,
//   productTopRatedReducer,
// } from './reducers/productReducers'

// import { cartReducer } from './reducers/cartReducers'

import {
  userLoginReducer,
  // userRegisterReducer,
  // userDetailsReducer,
  // userUpdateProfileReducer,
  // userListReducer,
  // userDeleteReducer,
  // userUpdateReducer,
} from './reducers/userReducers'

// import {
//   orderCreateReducer,
//   orderDetailsReducer,
//   orderPayReducer,
//   orderDeliverReducer,
//   orderListMyReducer,
//   orderListReducer,
// } from './reducers/orderReducers'

const reducer = combineReducers({
  // productList: productListReducer,
  // productDetails: productDetailsReducer,
  // productDelete: productDeleteReducer,
  // productCreate: productCreateReducer,
  // productUpdate: productUpdateReducer,
  // productReviewCreate: productReviewCreateReducer,
  // productTopRated: productTopRatedReducer,
  // cart: cartReducer,
  userLogin: userLoginReducer,
  // userRegister: userRegisterReducer,
  // userDetails: userDetailsReducer,
  // userUpdateProfile: userUpdateProfileReducer,
  // userList: userListReducer,
  // userDelete: userDeleteReducer,
  // userUpdate: userUpdateReducer,
  // orderCreate: orderCreateReducer,
  // orderDetails: orderDetailsReducer,
  // orderPay: orderPayReducer,
  // orderDeliver: orderDeliverReducer,
  // orderListMy: orderListMyReducer,
  // orderList: orderListReducer,
})

const userLogin = localStorage.getItem('userLogin')
  ? JSON.parse(localStorage.getItem('userLogin'))
  : {
    name: 'Convidado',
    email: 'convidado@pesquisajus.com.br',
    role: 'User',
    token: ''
  }

const initialState = {
  userLogin,
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
