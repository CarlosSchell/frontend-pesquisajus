import React from 'react'
// import { Container } from 'react-bootstrap'
import PesquisaPublicacoesMeusProcessos from '../components/processos/PesquisaPublicacoesMeusProcessos'
import ListaDosMeusProcessos from '../components/processos/ListaDosMeusProcessos'

const PesquisaMeusProcessos = () => {
    return (
        <div className="flex-container">
            <div className="sidebar">
                <ListaDosMeusProcessos />
            </div>

            <div className="content">
                <PesquisaPublicacoesMeusProcessos />
            </div>
        </div>
    )
}

export default PesquisaMeusProcessos
