import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import * as Icon from 'react-bootstrap-icons'
import { userLogout } from '../actions/userActions'

import SvgHome from './components.header/SvgHome.jsx'
import SvgPesquisar from './components.header/SvgPesquisar.jsx'
import SvgProcessos from './components.header/SvgProcessos.jsx'
import SvgDiversos from './components.header/SvgDiversos.jsx'
import SvgUsuario from './components.header/SvgUsuario.jsx'

// import './customheader.css' // temporaria retira na verfsao definitiva

const Navbartest = () => {
  console.log('Passou pelo Header')

  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state)
  let name = userLogin.name ?? 'Usuario'
  name = name.substr(0, 12)
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
      className="sticky-top mx-0 my-0 px-0 py-0"
      style={{ alignItems: 'center', minWidth: '360px', display: 'flex', flexDirection: 'row' }}
    >
      <Nav className="mr-auto" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
        <LinkContainer to="/" style={{ margin: '17px 30px 10px 20px', padding: '0px 0px 0px 0px' }}>
          <Nav.Link>
            <SvgHome />
          </Nav.Link>
        </LinkContainer>
      </Nav>

      <Nav className="ml-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <LinkContainer to="/pesquisapornome" style={{ margin: '19px 0px 10px 10px', padding: '0px 0px 0px 0px' }}>
          <Nav.Link>
            <SvgPesquisar />
          </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/meusprocessos" style={{ margin: '18px 4px 10px 10px', padding: '0px 0px 0px 0px' }}>
          <Nav.Link>
            <SvgProcessos />
          </Nav.Link>
        </LinkContainer>

        <NavDropdown
          id="basic-nav-dropdown"
          title={<SvgDiversos style={{ margin: '0px 0px 10px 0px', padding: '0px 0px 0px 0px' }} />}
          drop={'down'}
          style={{
            fontSize: '24px',
            marginTop: '1px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
          }}
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

        {userLogin && userLogin.name !== 'Convidado' ? (
          <NavDropdown
            id="dropdown-menu-align-right"
            title={<SvgUsuario name={name} style={{ margin: '0px 0px 0px 0px', padding: '0px 0px 0px 0px' }} />}
            drop="down"
            style={{
              fontSize: '24px',
              marginTop: '0px',
              marginBottom: '0px',
              marginLeft: '0px',
              marginRight: '0px',
              paddingTop: '0px',
              paddingBottom: '0px',
              paddingLeft: '0px',
              paddingRight: '0px',
            }}
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
          <LinkContainer to="/login">
            <Nav.Link>
              <strong
                style={{
                  color: '#1520A6',
                  backgroundColor: '',
                  margin: '5px 20px 0px 0px',
                  padding: '0px 0px 0px 0px',
                }}
              >
                Entrar
              </strong>
            </Nav.Link>
          </LinkContainer>
        )}
      </Nav>
    </Navbar>
  )
}

export default Navbartest
