import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaPorNome from '../components/components.pesquisapornome/PesquisaPorNome'
// import ListaDosMeusProcessos from '../components/components.listadeprocessos/ListaDosMeusProcessos'

const PesquisaPorNomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        {/* <Col sm={3} style={{ backgroundColor: ' #eaeded ', width: '420px', minHeight: '89.7vh' }}>
          <ListaDosMeusProcessos />
        </Col> */}

        <Col sm={12} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaPorNome />
        </Col>
      </Row>
    </Container>
  )
}
export default PesquisaPorNomeScreen
