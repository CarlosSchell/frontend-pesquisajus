import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import * as Icon from 'react-bootstrap-icons'
import userLogout from '../../actions/userActions'

import IconHome from './IconHome'
import IconPesquisar from './IconPesquisar'
import IconProcessos from './IconProcessos'

import IconDiversos from './IconDiversos'
import IconUsuario from './IconUsuario'

// import './customheader.css' // temporaria retira na verfsao definitiva

const Header = () => {
    // eslint-disable-next-line no-console
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
    // <div className="header">
    return (
        <Navbar bg="light" className="fixed-top header justify-content-between">
            <Navbar.Brand
                href="/"
                style={{ margin: '0px 6px 0px 10px', padding: '0px 0px 0px 0px' }}>
                <IconHome />
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Link href="/pesquisageral">
                    <IconPesquisar />
                </Nav.Link>
                <Nav.Link href="/meusprocessos">
                    <IconProcessos />
                </Nav.Link>
                <NavDropdown
                    id="basic-nav-dropdown"
                    title={<IconDiversos />}
                    // eslint-disable-next-line react/jsx-curly-brace-presence
                    drop="down"
                    style={{
                        fontSize: '24px',
                        marginTop: '1px',
                    }}>
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

                <div style={{ marginRight: '15px' }} >
                    {userLogin && userLogin.name !== 'Convidado' ? (
                        <NavDropdown
                            id=""
                            title={<IconUsuario name={name} />}
                            drop="down">

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
                        <Nav.Link href="/login" style={{ marginTop: '8px'}}>
                            <strong style={{ color: '#1520A6' }}>Entrar</strong>
                        </Nav.Link>
                    )}

                </div>
            </Nav>
            
        </Navbar>
    )
}

export default Header

//    <div className="ml-auto" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

// {/* <Nav className="mr-auto" >
// <LinkContainer
//     to="/"
//     style={{ margin: '0px 6px 0px 10px', padding: '0px 0px 0px 0px'}}>
//     <Nav.Link>
//         <IconHome />
//     </Nav.Link>
// </LinkContainer>
// </Nav> */}
// {/* <LinkContainer to="/login" style={{ marginTop: '8px' }}>
// <Nav.Link>
//     <strong style={{ color: '#1520A6' }}>Entrar</strong>
// </Nav.Link>
// </LinkContainer> */}

