// import { Link, NavLink } from 'react-router-dom'
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'
// import { ReactComponent as Logo } from '../images/pesquisajus.svg'
// import { useDispatch, useSelector } from 'react-redux'
// import HeaderShowUserImage from './components.header/HeaderShowUserImage'
// import { userLogout } from '../actions/userActions'
// // background-color: linear-gradient(-90deg, #84cf6a, #16c0b0);


// const Header = () => {
//   console.log('Passou pelo Header')
//   const dispatch = useDispatch()
//   const { userLogin } = useSelector((state) => state)
//   // const { userProcessos } = useSelector((state) => state)
//   // let userDisplayName = userLogin ? userLogin.name : 'Convidado'
//   let userDisplayName = userLogin.name
//   // console.log('Header userLogin.email : ', userLogin.email)
//   // console.log('Header userProcessos.processos : ', userProcessos.processos)

//   const logoutHandler = () => {
//     dispatch(userLogout())
//   }

//   return (
//     <Navbar
//       sticky="top"
//       className="py-4 align-items-center navbar navbar-expand-md"
//       style={{ minHeigth: '10vh',  backgroundColor: '#78c2ad' }}  // #78c2ad - '#567d46
//     >
//       <div className="container-fluid">
//         <Link className="logo-container" exact to="/">
//           <Logo className="logo" />
//         </Link>

//         <Nav>

//         <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               activeClassname="active"
//             >
//               Home
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/teste"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               activeClassname="active"
//             >
//               Teste
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/meusprocessos"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               activeClassname="active"
//             >
//               Meus Processos
//             </NavLink>
//           </Nav.Item>

//           {/* <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/pesquisapornome"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               n="active"
//             >
//               Busca por Nome
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/pesquisapornumero"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               n="active"
//             >
//               Busca por Número
//             </NavLink>
//           </Nav.Item> */}

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/api"
//               style={{ fontSize: '24px' , fontWeight: '400', textDecoration: 'none', color:'white' }}
//             >
//               API
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/downloads"
//               style={{ fontSize: '24px' , fontWeight: '400', textDecoration: 'none', color:'white' }}
//             >
//               Downloads
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-4 mt-2">
//             <NavLink
//               exact
//               to="/sobrenos"
//               style={{ fontSize: '24px' , fontWeight: '400', textDecoration: 'none', color:'white' }}
//             >
//               Sobre nós
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item className="mr-3 mt-2">
//             <NavLink
//               exact
//               to="/contato"
//               style={{ fontSize: '24px', fontWeight: '400', textDecoration: 'none', color:'white' }}
//               n="active"
//             >
//               Contato
//             </NavLink>
//           </Nav.Item>

//           <HeaderShowUserImage value={userDisplayName} />

//           {userLogin && userLogin.name !== 'Convidado' ? (
//             <NavDropdown
//               title={<span style={{ color: 'darkblue', fontWeight: '450' }}>{userDisplayName}</span>}
//               n="active"
//               id="username"
//               className="mx-2"
//             >
//               <LinkContainer to="/profile">
//                 <NavDropdown.Item>Perfil Senha</NavDropdown.Item>
//               </LinkContainer>

//               <LinkContainer to="/changepassword">
//                 <NavDropdown.Item>Mudar Senha</NavDropdown.Item>
//               </LinkContainer>

//               <LinkContainer to="/">
//                 <NavDropdown.Item onClick={logoutHandler}>Sair</NavDropdown.Item>
//               </LinkContainer>
//             </NavDropdown>
//           ) : (
//             <>
//               <LinkContainer to="/login" className="h5 mx-4">
//                 <Nav.Link>
//                   <strong>Entrar</strong>
//                 </Nav.Link>
//               </LinkContainer>
//             </>
//           )}
//         </Nav>
        
//       </div>
//     </Navbar>
//   )
// }

// export default Header
