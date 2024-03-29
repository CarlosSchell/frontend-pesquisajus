import React from 'react'
import PropTypes from 'prop-types'
import Publicacao from './Publicacao'

const Publicacoes = ({ publicacoes, textToHighlight, incluiProcessoLista }) => (
    <div>
        {publicacoes.map((publicacao) => (
            <Publicacao
                key={publicacao.id}
                publicacao={publicacao}
                textToHighlight={textToHighlight}
                incluiProcessoLista={incluiProcessoLista}
            />
        ))}
        <hr />
    </div>
)

Publicacoes.propTypes = {
    publicacoes: PropTypes.string.isRequired,
    textToHighlight: PropTypes.string.isRequired,
    incluiProcessoLista: PropTypes.func.isRequired
}

export default Publicacoes
