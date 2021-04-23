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

                <LinkContainer to="/" >
                    <Navbar.Brand style={{ fontSize: '28px'}}>pesquisajus</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">
                        <LinkContainer to="/" style={{ fontSize: '20px', marginLeft: '10px' }}>Home</LinkContainer >

                        <LinkContainer to="/meusprocessos" style={{ fontSize: '20px', marginLeft: '5px' }}>Processos</LinkContainer >

                        <NavDropdown title="Busca" id="basic-nav-dropdown" style={{ fontSize: '20px', marginLeft: '5px' }}>
                            <LinkContainer to="/pesquisaporoab">
                                <NavDropdown.Item>Por OAB</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/pesquisapornome">
                                <NavDropdown.Item>Por Nome</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/pesquisapornumero">
                                <NavDropdown.Item>Por Número</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title="Dados" id="basic-nav-dropdown" style={{ fontSize: '20px', marginLeft: '5px' }}>
                            <LinkContainer to="/api">
                                <NavDropdown.Item>API</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/downloads">
                                <NavDropdown.Item >Baixar Dados</NavDropdown.Item>
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

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Navbartest

<Nav className="ml-auto">
<HeaderShowUserImage />
{userLogin && userLogin.name !== 'Convidado' ? (
  <NavDropdown title={userLogin.name} id="basic-nav-dropdown" style={{ fontSize: '18px'}}>
    <NavDropdown.Item href="/profile">Perfil</NavDropdown.Item>
    <NavDropdown.Item href="/changepassword">Senha</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
  </NavDropdown>
) : (
  <NavDropdown.Item href="/login" style={{ fontSize: '18px' }}>
    <strong>Entrar</strong>
  </NavDropdown.Item>
)}
</Nav>