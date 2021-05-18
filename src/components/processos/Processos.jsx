import React from 'react'
import PropTypes from 'prop-types'
import Processo from './Processo'

const Processos = ({ processos, onDelete }) => {
    return (
        <div>
            {processos.map((processo) => (
                <Processo key={processo.id} processo={processo} onDelete={onDelete} />
            ))}
        </div>
    )
}

Processos.propTypes = {
    onDelete: PropTypes.func.isRequired,
    processos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            processo: PropTypes.string,
            descricao: PropTypes.string,
            
        })
    ).isRequired
}


export default Processos
