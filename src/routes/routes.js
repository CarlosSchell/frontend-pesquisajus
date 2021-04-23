import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbartest from '../components/Navbartest.jsx'
// import Header from '../components/Header.jsx'
import HomeScreen from '../pages/HomeScreen.jsx'
import PesquisaMeusProcessosScreen from '../pages/PesquisaMeusProcessosScreen.jsx'
import PesquisaPorOabScreen from '../pages/PesquisaPorOabScreen.jsx'
import PesquisaPorNomeScreen from '../pages/PesquisaPorNomeScreen.jsx'
import PesquisaPorNumeroScreen from '../pages/PesquisaPorNumeroScreen.jsx'
import Api from '../pages/Api.jsx'
import Downloads from '../pages/Downloads.jsx'
import Planos from '../pages/Planos.jsx'
import SobreNos from '../pages/SobreNos.jsx'
import Contato from '../components/Contato.jsx'

import LoginScreen from '../components/LoginScreen'
import RegisterScreen from '../components/RegisterScreen'
import ChangePassword from '../components/ChangePassword'
import ForgotPassword from '../components/ForgotPassword'
import ConfirmEmail from '../components/ConfirmEmail'
import UserProfile from '../components/UserProfile'
import { userLogout } from '../actions/userActions'
//import Admin from '../components/Admin.jsx'

import PageNotFound from '../components/PageNotFound'

//<Header />

const RoutesApp = () => (
  <Router>
    <Navbartest />
    <Switch>
      <Route path="/" component={HomeScreen} exact />

      <Route path="/meusprocessos" component={PesquisaMeusProcessosScreen} exact />
      <Route path="/pesquisaporoab" component={PesquisaPorOabScreen} exact />
      <Route path="/pesquisapornome" component={PesquisaPorNomeScreen} exact />
      <Route path="/pesquisapornumero" component={PesquisaPorNumeroScreen} exact />
      <Route path="/api" component={Api} exact />
      <Route path="/downloads" component={Downloads} exact />
      <Route path="/plans" component={Planos} exact />
      <Route path="/about" component={SobreNos} exact />
      <Route path="/contact" component={Contato} exact />

      <Route path="/login" component={LoginScreen} exact />
      <Route path="/logout" component={userLogout} exact />
      <Route path="/register" component={RegisterScreen} exact />
      <Route path="/profile" component={UserProfile} exact />
      <Route path="/changepassword/" component={ChangePassword} exact />
      <Route path="/changepassword/:token" component={ChangePassword} />
      <Route path="/forgotpassword" component={ForgotPassword} exact />
      <Route path="/confirmemail/:token" component={ConfirmEmail} />

      <Route path="/admin/userlist" component={''} />
      <Route path="/admin/user/:id/edit" component={''} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)

export default RoutesApp
