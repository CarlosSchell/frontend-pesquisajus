import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// import { Link, NavLink } from 'react-router-dom'

// import "../styles/customheader.css"
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
import { userLogout } from '../actions/userActions'

// import HeaderShowUserImage from "./HeaderShowUserImage" // temporaria retira na verfsao definitiva
//import "./customheader.css" // temporaria retira na verfsao definitiva

const Navbartest = () => {
  console.log('Passou pelo Header')

  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state)
  // const { userProcessos } = useSelector((state) => state)
  // userDisplayName = userLogin ? userLogin.name : 'Convidado'
  // let userDisplayName = userLogin.name
  // console.log('Header userLogin.email : ', userLogin.email)
  // console.log('Header userProcessos.processos : ', userProcessos.processos)

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  // Retirar estas constantes depois de incorporar o componente Header ao distema
  //   const logoutHandler = () => {}
  //   const userLogin = { name: "Carlos Schellenberger" }
  //   const userDisplayName = "Carlos Schellenberger"

  return (
    <header>
      <Navbar bg="light" expand="md">
        <Container fluid="md" className="p-2">
          <LinkContainer to="/" style={{ fontSize: '32px' }}>
            <Navbar.Brand>pesquisajus</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/" style={{ fontSize: '20px', marginLeft: '10px' }}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/meusprocessos" style={{ fontSize: '20px', marginLeft: '5px' }}>
                <Nav.Link>Processos</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Busca" id="basic-nav-dropdown" style={{ fontSize: '20px', marginLeft: '5px' }}>
                <LinkContainer to="/pesquisapornome">
                  <NavDropdown.Item>Por Nome</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/pesquisapornumero">
                  <NavDropdown.Item>Por Número</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/pesquisaporoab">
                  <NavDropdown.Item>Por OAB</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Dados" id="basic-nav-dropdown" style={{ fontSize: '20px', marginLeft: '5px' }}>
                <LinkContainer to="/api">
                  <NavDropdown.Item>API</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/downloads">
                  <NavDropdown.Item>Baixar Dados</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Planos" id="basic-nav-dropdown" style={{ fontSize: '20px', marginLeft: '5px' }}>
                <LinkContainer to="/plans">
                  <NavDropdown.Item>Planos</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/about">
                  <NavDropdown.Item>Empresa</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <NavDropdown.Item>Contato</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Nav className="ml-auto" style={{ fontSize: '28px' }}>
                <HeaderShowUserImage />
                {userLogin && userLogin.name !== 'Convidado' ? (
                  <NavDropdown title={<span style={{ color: '#1520A6', backgroundColor: 'white', fontSize: '16px'}}>{userLogin.name}</span>} id="basic-nav-dropdown" style={{ fontSize: '18px', color:'blue' }}>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Perfil</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/changepassword">
                      <NavDropdown.Item>Mudar Senha</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login" style={{ fontSize: '18px', paddingTop: '10px', backgroundColor: 'white'}}>
                    <NavDropdown.Item >
                      <strong style={{ color: '#1520A6', backgroundColor: 'white'}}>Entrar</strong>
                    </NavDropdown.Item>
                  </LinkContainer>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Navbartest
