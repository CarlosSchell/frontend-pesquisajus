import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import Publicacoes from './components.listadepublicacoes/Publicacoes'
import PesquisaPorNome from './components.pesquisapornome/PesquisaPorNome'
import ListaDeProcessos from './components.listadeprocessos/ListaDeProcessos'

const HomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} style={{ backgroundColor: ' #eaeded ', width: '420px', minHeight: '89.7vh' }}>
          <ListaDeProcessos />
        </Col>

        <Col sm={10} style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }}>
          <PesquisaPorNome />
        </Col>
      </Row>
    </Container>
  )
}
export default HomeScreen

// <Col style={{ backgroundColor: 'beige', height: '89.7vh' }}>{/*<ListaDeProcessos />*/}</Col>
