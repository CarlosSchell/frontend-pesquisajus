// import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';

// import ProtectedRoute from './routes/ProtectedRoute'
import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import SobreNos from './components/SobreNos.jsx'
import Contato from './components/Contato.jsx'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import ChangePassword from './components/ChangePassword'
import ForgotPassword from './components/ForgotPassword'
import ConfirmPassword from './components/ConfirmPassword'
import UserProfile from './components/UserProfile'
import { logout } from './actions/userActions'
import Pesquisa from './components/Pesquisa'
import Admin from './components/Admin.jsx'
// import Footer from './components/Footer'
// import { verifyUserJWT } from './jwt/verifyUserJWT'

// Base URL
// const baseUrl = process.env.HOST_API_URL || "https//:localhost:21115"

export const App = () => {

  console.log('Passou pelo App')

  // const [userLogin, userLogin] = useState({})
  // const currentUser = verifyUserJWT()
  // console.log('userLogin from the App : ', userLogin)
  // let userLogin = verifyUserJWT()

  // console.log('Passou pelo App', userLogin)

  // useEffect(() => {
  //   // userLogin(verifyUserJWT())
  // }, [])

  return (
    <Provider store={store}>
      <Router>
        <Container fluid>
          <Header />
          <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/about" component={SobreNos} exact />
            <Route path="/contato" component={Contato} />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/logout" component={logout}  />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/pesquisa" component={Pesquisa} />
            <Route path="/changepassword" component={ChangePassword} exact />
            <Route path="/forgotpassword" component={ForgotPassword} exact />
            <Route path="/confirmpassword/:token" component={ConfirmPassword} />
            ConfirmForgottenPassword
            <Route path="/admin" component={Admin} />
            <Route path="/admin/userlist" component={''} />
            <Route path="/admin/user/:id/edit" component={''} />
          </main>

        </Container>
      </Router>
    </Provider>
  )
}


//           <Footer />