import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as Logo } from './method-draw-image.svg'
import { useDispatch, useSelector } from 'react-redux'
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
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

  // style={{ background: 'linear-gradient(-90deg, #84cf6a, #16c0b0)', color: 'darkblue' }}>

  return (
    <>
      <Navbar bg="primary" variant="dark" className="py-4 align-items-center" expand="md" collapseOnSelect style={{ minHeight: '100px', color: 'darkblue' }}>
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="h4 ml-auto">
            <Nav.Link href="/pesquisa" style={{ color: 'darkblue' }}>
              Meus Processos
            </Nav.Link>
            <Nav.Link href="/contato" style={{ color: 'darkblue' }}>
              Contato
            </Nav.Link>
            <Nav.Link href="/admin" style={{ color: 'darkblue' }}>
              Admin
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: 'darkblue' }}>
              About
            </Nav.Link>

            <HeaderShowUserImage value={userDisplayName} />

            {userInfo ? (
              <div style={{ color: 'darkblue' }}>
                <NavDropdown title={userInfo.name} id="username" className="mx-4" style={{ color: 'darkblue' }}>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
                </NavDropdown>
              </div>
            ) : (
              <>
                <LinkContainer to="/login" className="h5 mx-4">
                  <Nav.Link>
                    <strong style={{ color: 'darkblue' }}>Entrar</strong>
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
