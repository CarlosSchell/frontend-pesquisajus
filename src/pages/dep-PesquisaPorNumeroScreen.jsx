import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaPorNumero from '../components/components.pesquisapornumero/PesquisaPorNumero'
import ListaDosMeusProcessos from '../components/components.listadeprocessos/ListaDosMeusProcessos'

const PesquisaPorNumeroScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={3} style={{ backgroundColor: ' #eaeded ', width: '420px', minHeight: '89.7vh' }}>
          <ListaDosMeusProcessos />
        </Col>

        <Col sm={9} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaPorNumero />
        </Col>
      </Row>
    </Container>
  )
}

export default PesquisaPorNumeroScreen
