import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ListaDePublicacoes from './components.listadepublicacoes/ListaDePublicacoes'
import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

const MeusProcessos = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} style={{ backgroundColor: ' #eaeded ', width: '420px', height: '89.7vh' }}>
          <ListaDeProcessos />
        </Col>

        <Col sm={10} style={{ backgroundColor: '#ffecd9', height: '89.7vh' }}>
          <ListaDePublicacoes />
        </Col>
      </Row>
    </Container>
  )
}
export default MeusProcessos

// <Col style={{ backgroundColor: 'beige', height: '89.7vh' }}>{/*<ListaDeProcessos />*/}</Col>