import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PesquisaPorNome from '../components/pesquisa/PesquisaPorNome'

const PesquisaPorNomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaPorNome />
        </Col>
      </Row>
    </Container>
  )
}

export default PesquisaPorNomeScreen
