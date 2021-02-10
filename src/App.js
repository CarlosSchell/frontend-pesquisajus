// import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';

import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import About from './components/About'
import Contato from './components/Contato'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import { logout } from './actions/userActions'
import Pesquisa from './components/Pesquisa'
import Admin from './components/Admin'
import Footer from './components/Footer'
// import { verifyUserJWT } from './jwt/verifyUserJWT'

export const App = () => {

  // const [userInfo, setUserInfo] = useState({})
  // const currentUser = verifyUserJWT()
  // console.log('UserInfo from the App : ', userInfo)
  // let userInfo = verifyUserJWT()

  // console.log('Passou pelo App', userInfo)

  // useEffect(() => {
  //   // setUserInfo(verifyUserJWT())
  // }, [])

  return (
    <Provider store={store}>
      <Router>
        <Container fluid>
          <Header />
          <main>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contato" component={Contato} />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/logout" component={logout} exact />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={''} />
            <Route path="/pesquisa" component={Pesquisa} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin/userlist" component={''} />
            <Route path="/admin/user/:id/edit" component={''} />
          </main>
          <Footer />
        </Container>
      </Router>
    </Provider>
  )
}
