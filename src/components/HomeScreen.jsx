import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pesquisa from './Pesquisa'
import ListaDePublicacoes from './ListaDePublicacoes'
//import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

const HomeScreen = () => {

  return (
    <Container fluid >
      <Row>

        <Col sm={2} style={ {backgroundColor:"lightblue", height:"82vh"} }> 
          {/*<ListaDeProcessos />*/}
        </Col>

        <Col sm={8} style={ {backgroundColor:"lightgrey", height:"82vh" }}> 
          <Pesquisa />
          <ListaDePublicacoes />
        </Col>

        <Col sm={2} style={ {backgroundColor:"lightcoral", height:"82vh"} }> 
          {/*<ListaDeProcessos />*/}
        </Col>

      </Row>
    </Container>
  )
}
export default HomeScreen
