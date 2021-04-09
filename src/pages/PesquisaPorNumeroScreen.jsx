import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaPorNumero from '../components/components.pesquisapornumero/PesquisaPorNumero'
import ListaDeProcessos from '../components/components.listadeprocessos/ListaDeProcessos'

const PesquisaPorNumeroScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} style={{ backgroundColor: ' #eaeded ', width: '420px', minHeight: '89.7vh' }}>
          <ListaDeProcessos />
        </Col>

        <Col sm={10} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaPorNumero />
        </Col>
      </Row>
    </Container>
  )
}
export default PesquisaPorNumeroScreen
