import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaMeusProcessos from '../components/components.pesquisameusprocessos/PesquisaMeusProcessos.jsx'
import ListaDeProcessos from '../components/components.listadeprocessos/ListaDeProcessos.jsx'

const PesquisaMeusProcessosScreen = () => {
  return (
    <Container fluid>
      <Row>

        <Col sm={3} style={{ backgroundColor: '#eaeded', width: '540px', minHeight: '89.7vh' }}>
          <ListaDeProcessos />
        </Col>

        <Col sm={9} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaMeusProcessos />
        </Col>

      </Row>
    </Container>
  )
}
export default PesquisaMeusProcessosScreen

// <Col style={{ backgroundColor: 'beige', height: '89.7vh' }}>{/*<ListaDeProcessos />*/}</Col>