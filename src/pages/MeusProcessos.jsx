import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ListaDePublicacoes from '../components/components.listadepublicacoes/ListaDePublicacoes.jsx'
import ListaDeProcessos from '../components/components.listadeprocessos/ListaDeProcessos.jsx'

const MeusProcessos = () => {
  return (
    <Container fluid>
      <Row>

        <Col sm={3} style={{ backgroundColor: '#eaeded', width: '540px', minHeight: '89.7vh' }}>
          <ListaDeProcessos />
        </Col>

        <Col sm={9} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <ListaDePublicacoes />
        </Col>

      </Row>
    </Container>
  )
}
export default MeusProcessos

// <Col style={{ backgroundColor: 'beige', height: '89.7vh' }}>{/*<ListaDeProcessos />*/}</Col>