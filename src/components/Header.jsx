import { Link, NavLink } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as Logo } from './method-draw-image.svg'
import { useDispatch, useSelector } from 'react-redux'
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
import { logout } from '../actions/userActions'

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
  //   <Navbar
  //   bg="primary"
  //   variant=""
  //   className="py-4 align-items-center"
  //   expand="md"
  //   collapseOnSelect
  //   style={{ minHeight: '100px' }}
  // >
  // <nav className="py-4 align-items-center navbar navbar-expand-md bg-primary style={{minHeigth: 100px}}">

  return (
    <nav className="py-4 align-items-center navbar navbar-expand-md bg-primary" style={{minHeigth: "10vh", backgroundColor:"#00A170"}}>
      <div className="container-fluid">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <Nav>
          <Nav.Item>
            <NavLink
              exact
              to="/contato"
              className="nav-link"
              style={{ fontSize: '22px', fontWeight: '450', color: 'white', textDecoration: 'none' }}
            >
              Contato
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              exact
              to="/admin"
              className="nav-link"
              style={{ fontSize: '22px', fontWeight: '450', color: 'white', textDecoration: 'none' }}
            >
              Admin
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              exact
              to="/sobrenos"
              className="nav-link"
              style={{ fontSize: '22px', fontWeight: '450', color: 'white', textDecoration: 'none' }}
            >
              Sobre nós
            </NavLink>
          </Nav.Item>

          <HeaderShowUserImage value={userDisplayName} />

          {userLogin && userLogin.name !== 'Convidado' ? (

            <NavDropdown title={<span style={{ color: 'darkblue', fontWeight: '450'}}>{userDisplayName}</span>} id="username" className="mx-2">

              <LinkContainer to="/profile">
                <NavDropdown.Item>Perfil Senha</NavDropdown.Item>
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
        </Nav>
      </div>
    </nav>
  )
}

export default Header
