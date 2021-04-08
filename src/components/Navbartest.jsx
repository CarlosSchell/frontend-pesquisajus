import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/customheader.css'

import { ReactComponent as Logo } from '../images/pesquisajus.svg'
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
      <div>
        <Link className="navbar-brand logo" exact to="/">
          <Logo className="" />
        </Link>
      </div>
      <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/meusprocessos">
        Meus Processos
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/pesquisapornome">
        Busca por Nome
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/pesquisapornumero">
        Busca por Número
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/api">
        API
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/downloads">
        Downloads
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/sobrenos">
        Sobre nós
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

// https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535

//   <nav className="navbar">
