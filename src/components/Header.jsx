import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as Logo } from './method-draw-image.svg'
import { useDispatch, useSelector } from 'react-redux'
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
import { logout } from '../actions/userActions'

// const buildDate = new Date()
// const buildNumber = (buildDate.toString()).substr(0,21)
const buildNumber = 'Versao: Thu Feb 25 2021 20:30'

const Header = () => {
  console.log('Passou pelo Header')

  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state)
  // const { userLogin } = userLogin

  console.log('Header Store userLogin : ', userLogin.email)

  // let userDisplayName = userLogin ? userLogin.name : 'Convidado'
  let userDisplayName = userLogin.name

  const logoutHandler = () => {
    dispatch(logout())
  }

  // style={{ background: 'linear-gradient(-90deg, #84cf6a, #16c0b0)', color: 'darkblue' }}>

  return (
    <>
      <Navbar
        bg="primary"
        variant=""
        className="py-4 align-items-center"
        expand="md"
        collapseOnSelect
        style={{ minHeight: '100px' }}
      >
        <div>
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
          <div style={{ color: 'black' }}>{buildNumber}</div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          

            <LinkContainer to="/contato">
              <Nav.Link style={{ color: 'darkblue' }}>
                Contato
              </Nav.Link>
            </LinkContainer>

            <Nav.Link href="/admin" style={{ color: 'darkblue' }}>
              Admin
            </Nav.Link>
            <Nav.Link href="/sobrenos" style={{ color: 'darkblue' }}>
              Sobre nós
            </Nav.Link>

            <HeaderShowUserImage value={userDisplayName} />

            {userLogin && userLogin.name !== 'Convidado' ? (
              <NavDropdown
                title={<span className="text-dark my-auto">{userDisplayName}</span>}
                id="username"
                className="mx-4"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/changepassword">
                  <NavDropdown.Item>Mudar Senha</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/">
                  <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login" className="h5 mx-4">
                  <Nav.Link>
                    <strong>Entrar</strong>
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header


// <Nav className="h4 ml-auto">
//</Nav>