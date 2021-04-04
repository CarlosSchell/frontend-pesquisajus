import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import Publicacoes from './components.listadepublicacoes/Publicacoes'
import PesquisaPorNumero from './components.pesquisapornumero/PesquisaPorNumero'
import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

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
