import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaMeusProcessos from '../components/pesquisa/PesquisaMeusProcessos'
import ListaDosMeusProcessos from '../components/processos/ListaDosMeusProcessos'

const PesquisaMeusProcessosScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} style={{ backgroundColor: '#eaeded', width: '540px', minHeight: '89.7vh' }}>
          <ListaDosMeusProcessos />
        </Col>

        <Col sm={9} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaMeusProcessos />
        </Col>
      </Row>
    </Container>
  )
}

export default PesquisaMeusProcessosScreen
