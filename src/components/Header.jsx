import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ReactComponent as Logo } from './method-draw-image.svg'
import { useDispatch, useSelector } from 'react-redux'
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
import { userLogout } from '../actions/userActions'

// background-color: linear-gradient(-90deg, #84cf6a, #16c0b0);

const Header = () => {
  console.log('Passou pelo Header')

  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state)
  const { userProcessos } = useSelector((state) => state)

  // let userDisplayName = userLogin ? userLogin.name : 'Convidado'
  let userDisplayName = userLogin.name

  console.log('Header userLogin.email : ', userLogin.email)
  console.log('Header userProcessos.processos : ', userProcessos.processos)

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  return (
    <Navbar sticky="top"  variant="dark" className="py-4 align-items-center navbar navbar-expand-md" 
          style={{minHeigth: "10vh", backgroundColor: '567d46'}}>
      <div className="container-fluid">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <Nav >

          <Nav.Item>
            <NavLink
              exact
              to="/meusprocessos"
              className="nav-link"
              style={{ fontSize: '22px', fontWeight: '450', color: 'white', textDecoration: 'none' }}
            >
              Meus Processos
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink
              exact
              to="/buscapornome"
              className="nav-link"
              style={{ fontSize: '22px', fontWeight: '450', color: 'white', textDecoration: 'none' }}
            >
              Busca por Nome
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
    </Navbar>
  )
}

export default Header
