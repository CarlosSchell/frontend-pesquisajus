import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store';

// import ProtectedRoute from './routes/ProtectedRoute'
//import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import SobreNos from './components/SobreNos.jsx'
import Contato from './components/Contato.jsx'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import ChangePassword from './components/ChangePassword'
import ForgotPassword from './components/ForgotPassword'
import ConfirmEmail from './components/ConfirmEmail'
import UserProfile from './components/UserProfile'
import { logout } from './actions/userActions'
import Pesquisa from './components/Pesquisa'
import Admin from './components/Admin.jsx'
import PageNotFound from './components/PageNotFound'
// import Footer from './components/Footer'
// import { verifyUserJWT } from './jwt/verifyUserJWT'

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

  // <Container fluid>
  // </Container>
  return (
    <Provider store={store}>
      <Router>

          <Header />
          <main>
            <Switch>
              <Route path="/" component={HomeScreen} exact />
              <Route path="/sobrenos" component={SobreNos} exact />
              <Route path="/contato" component={Contato} exact/>
              <Route path="/login" component={LoginScreen} exact />
              <Route path="/logout" component={logout}  exact/>
              <Route path="/register" component={RegisterScreen}exact />
              <Route path="/profile" component={UserProfile} exact/>
              <Route path="/pesquisa" component={Pesquisa} exact/>
              <Route path="/changepassword/" component={ChangePassword} exact />
              <Route path="/changepassword/:token" component={ChangePassword}  />
              <Route path="/forgotpassword" component={ForgotPassword} exact />
              <Route path="/confirmemail/:token" component={ConfirmEmail}/>
              <Route path="/admin" component={Admin} exact />
              <Route path="/admin/userlist" component={''} />
              <Route path="/admin/user/:id/edit" component={''} />
              <Route component={PageNotFound} />
            </Switch>
          </main>

      </Router>
    </Provider>
  )
}


//           <Footer />