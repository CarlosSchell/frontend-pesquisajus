import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import { userLogout } from '../actions/userActions'

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
    <Navbar
      bg="light"
      className="sticky-top"
      style={{ alignItems: 'center', minWidth: '360px', marginRight: '0px', marginLeft: '0px' }}
    >
      <Nav className="mr-auto" style={{ alignItems: 'center' }}>
        <LinkContainer to="/" style={{ marginLeft: '', marginRight: '10px' }}>
          <Nav.Link>
            <Icon.HouseDoor style={{ fontSize: '26px' }} />
          </Nav.Link>
        </LinkContainer>
      </Nav>

      <Nav className="ml-auto" style={{ alignItems: 'center' }}>
        <LinkContainer to="/pesquisapornome" style={{ fontSize: '20px' }}>
          <Nav.Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-zoom-in"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
            </svg>
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/meusprocessos">
          <Nav.Link>
            <Icon.WindowSidebar style={{ fontSize: '24px' }} />
          </Nav.Link>
        </LinkContainer>

        <NavDropdown
          title={<Icon.Wrench style={{ fontSize: '24px' }} />}
          id="basic-nav-dropdown"
          key="left"
          style={{ fontSize: '24px' }}
        >
          <LinkContainer to="/planos">
            <NavDropdown.Item>Assinatura</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/api">
            <NavDropdown.Item>API</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to="/downloads">
            <NavDropdown.Item>Baixar Dados</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to="/about">
            <NavDropdown.Item>Empresa</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavDropdown.Item>Contato</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        <Nav className="ml-auto" style={{}}>
          {userLogin && userLogin.name !== 'Convidado' ? (
            <NavDropdown
              title={<Icon.Person style={{ fontSize: '24px' }} />}
              id="basic-nav-dropdown"
              key={'down'}
              style={{ fontSize: '24px', marginRight: '15px' }}
            >
              <LinkContainer to="/login">
                <NavDropdown.Item>Entrar</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/profile">
                <NavDropdown.Item>Perfil</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/changepassword">
                <NavDropdown.Item>Senha</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login" style={{ fontSize: '18px', paddingTop: '', backgroundColor: 'white' }}>
              <NavDropdown.Item>
                <strong style={{ color: '#1520A6', backgroundColor: 'white' }}>Entrar</strong>
              </NavDropdown.Item>
            </LinkContainer>
          )}
        </Nav>
      </Nav>
    </Navbar>
  )
}

export default Navbartest
