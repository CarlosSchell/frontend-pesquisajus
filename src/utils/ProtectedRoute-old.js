// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// // import decodeUserToken from './decodeUserToken'

// const ProtectedRoute = (props) => {
//   const Component = props.component
//   const { userLogin } = useSelector((state) => state)

//   // Validar Token  // Ainda não validou o token
//   // const token = userLogin.token ?? ''
//   // const isTokenValid = decodeUserToken(token)
//   // const isAuthenticated = ((userLogin.email !== 'convidado@pesquisajus.com.br') && isTokenValid)

//   const isAuthenticated = (userLogin.email !== 'convidado@pesquisajus.com.br')  // Ainda não validou o token

//   console.log('ProtectedRoute : Está autenticado ? : ', isAuthenticated)

//   //localStorage.getItem('userLogin')

//   return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/' }} />
// }

// export default ProtectedRoute
