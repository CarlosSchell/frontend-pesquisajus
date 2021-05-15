import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/header/Header'
import HomeScreen from '../pages/HomeScreen'
import PesquisaPorNomeScreen from '../pages/PesquisaPorNomeScreen'
import PesquisaMeusProcessosScreen from '../pages/PesquisaMeusProcessosScreen'
import Api from '../pages/Api'
import Downloads from '../pages/Downloads'
import Planos from '../pages/Planos'
import SobreNos from '../pages/SobreNos'
import Contato from '../pages/Contato'
import Login from '../components/auth/Login'
import RegisterScreen from '../components/auth/RegisterScreen'
import ChangePassword from '../components/auth/ChangePassword'
import ForgotPassword from '../components/auth/ForgotPassword'
import ConfirmEmail from '../components/auth/ConfirmEmail'
import UserProfile from '../components/auth/UserProfile'
import userLogout from '../actions/userActions'
// import Admin from '../components/Admin'

import PageNotFound from '../pages/PageNotFound'

const RoutesApp = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route
                path="/meusprocessos"
                component={PesquisaMeusProcessosScreen}
                exact
            />
            <Route
                path="/pesquisapornome"
                component={PesquisaPorNomeScreen}
                exact
            />
            <Route path="/api" component={Api} exact />
            <Route path="/downloads" component={Downloads} exact />
            <Route path="/plans" component={Planos} exact />
            <Route path="/about" component={SobreNos} exact />
            <Route path="/contact" component={Contato} exact />

            <Route path="/login" component={Login} exact />
            <Route path="/logout" component={userLogout} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/profile" component={UserProfile} exact />
            <Route path="/changepassword/" component={ChangePassword} exact />
            <Route path="/forgotpassword" component={ForgotPassword} exact />
            <Route path="/changepassword/:token" component={ChangePassword} />
            <Route path="/confirmemail/:token" component={ConfirmEmail} />

            <Route path="/admin/userlist" />
            <Route path="/admin/user/:id/edit" />
            <Route component={PageNotFound} />
        </Switch>
    </Router>
)

export default RoutesApp
