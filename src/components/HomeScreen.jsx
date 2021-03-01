import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Pesquisa from './Pesquisa'
import ListaDePublicacoes from './ListaDePublicacoes'
import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

const HomeScreen = () => {

  return (
    <Container fluid >
      <Row>

        <Col sm={2} style={ {backgroundColor:"azure", width:"420px", height:"89.7vh"} }> 
          <ListaDeProcessos />
        </Col>

        <Col sm={8} style={ {backgroundColor:"lightgray", height:"89.7vh"} }> 
          <Pesquisa />
          <ListaDePublicacoes />
        </Col>

        <Col sm={2} style={ {backgroundColor:"beige", height:"89.7vh"} }> 
          {/*<ListaDeProcessos />*/}
        </Col>

      </Row>
    </Container>
  )
}
export default HomeScreen
