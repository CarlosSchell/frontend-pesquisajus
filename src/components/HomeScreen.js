import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pesquisa from './Pesquisa'
import ListaDePublicacoes from './ListaDePublicacoes'
import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

const HomeScreen = () => {

  return (
    <Container fluid style={{ heigth:'85vh'}}>
      <Row>

        <Col sm={3} style={ {backgroundColor:"lightblue"} }>
          <ListaDeProcessos />
        </Col>

        <Col sm={9} style={ {backgroundColor:"lightgrey"} }>
          <Pesquisa />
          <ListaDePublicacoes />
        </Col>
        
      </Row>
    </Container>
  )
}
export default HomeScreen


    // <Container>
    //   <div className="containerarea">
    //     <div className="mainarea">
    //       <div className="workingarea">
    //         <Pesquisa />
    //         <ListaDePublicacoes />
    //       </div>
    //       <div className="sidebararea">
    //         <h2 className="alignItemsCenter">
    //           Meus Processos
    //         </h2>
    //       </div>
    //     </div>
    //   </div>
    // </Container>
