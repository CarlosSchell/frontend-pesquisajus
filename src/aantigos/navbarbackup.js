import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/customheader.css'

import LogoPesquisajus from './components.header/LogoPesquisajus.jsx.js'
import HeaderShowUserImage from './components.header/HeaderShowUserImage'
import { userLogout } from '../actions/userActions'

const Navbartest = () => {
  console.log('Passou pelo Header')
  const dispatch = useDispatch()
  const { userLogin } = useSelector((state) => state)
  // const { userProcessos } = useSelector((state) => state)
  // let userDisplayName = userLogin ? userLogin.name : 'Convidado'
  let userDisplayName = userLogin.name
  // console.log('Header userLogin.email : ', userLogin.email)
  // console.log('Header userProcessos.processos : ', userProcessos.processos)

  const logoutHandler = () => {
    dispatch(userLogout())
  }

  return (
    <Navbar>

      <Link exact to="/">
        <LogoPesquisajus />
      </Link>

      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/meusprocessos">
        Meus Processos
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/pesquisapornome">
        Busca Nome
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/pesquisapornumero">
        Busca Numero
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/api">
        API
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/downloads">
        Arquivos
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/sobrenos">
        Sobre
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/contato">
        Contato
      </NavLink>

      <HeaderShowUserImage value={userDisplayName} />

      {userLogin && userLogin.name !== 'Convidado' ? (
        <NavDropdown
              title={<span style={{ color: 'darkblue', fontWeight: '450' }}>{userDisplayName}</span>}
              id="username"
              className="mx-2"
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
          <LinkContainer to="/login" className="h5 mx-4">
                <Nav.Link>
                  <strong>Entrar</strong>
                </Nav.Link>
          </LinkContainer>
        )
      }
    </Navbar>
  )
}

export default Navbartest
