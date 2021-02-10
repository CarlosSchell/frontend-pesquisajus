import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { ReactComponent as Logo } from './method-draw-image.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  let userDisplayName = userInfo ? userInfo.name : 'Convidado'
  //console.log('Desde o State apresentamos o  UserLogin', userLogin)
  console.log('Desde o UserLogin apresentamos o UserInfo', userInfo)
  //console.log('Name : ', userLogin.userInfo.name)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header >
      <Navbar bg="primary" variant="dark" className="py-4 aquaGradient" expand="md" collapseOnSelect
        style={{ background: 'linear-gradient(-90deg, #84cf6a, #16c0b0)' }}>

        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h5 ml-auto nav-items-custom" style={{ color: 'darkblue' }}>
            <Nav.Link href="/pesquisa" style={{ color: 'darkblue' }}>Meus Processos</Nav.Link>
            <Nav.Link href="/contato" style={{ color: 'darkblue' }}>Contato</Nav.Link>
            <Nav.Link href="/admin" style={{ color: 'darkblue' }}>Admin</Nav.Link>
            <Nav.Link href="/about" style={{ color: 'darkblue' }}>About</Nav.Link>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login" className="h5" >
                <Nav.Link>
                  <Icon.Person /> Entrar
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div>{userDisplayName} </div>

    </header>
  )
}

export default Header
