import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PesquisaPublicacoesMeusProcessos from '../components/processos/PesquisaPublicacoesMeusProcessos'
import ListaDosMeusProcessos from '../components/processos/ListaDosMeusProcessos'

const PesquisaMeusProcessos = () => {
    return (
        <div>
            <Row>
                <Col sm={3} style={{ backgroundColor: 'lightblue', minHeight: '89.7vh' }}>
                    <ListaDosMeusProcessos />
                </Col>

                <Col sm={9} style={{ backgroundColor: 'red', minHeight: '89.7vh' }}>
                    <PesquisaPublicacoesMeusProcessos />
                </Col>
            </Row>
        </div>
    )
}

export default PesquisaMeusProcessos
