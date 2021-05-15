import React from 'react'
import PropTypes from 'prop-types'
import * as Icon from 'react-bootstrap-icons'
import ButtonWhatsapp from '../publicacoes/ButtonWhatsapp'

const Processo = ({ processo, onDelete }) => {
  // WhatsApp Data
  const cellNumber = '51991068021' // futuramente colocar o numero do advogado / cliente / indicado
  const texto = processo.descricao

  return (
    <div>
      <div
        style={{
          fontSize: '1.1rem',
          marginLeft: '12px',
          marginBottom: '0px'
        }}
      >
        <p style={{ marginBottom: '0px', color: 'black' }}>
          <Icon.Trash
            style={{ marginBottom: '0px' }}
            onClick={() => {
              onDelete({
                processo: processo.processo,
                descricao: processo.descricao
              })
            }}
          />
          {'    '}
          {processo.descricao}
          &nbsp;
          <span style={{ padding: '10px' }}>
            <ButtonWhatsapp cellNumber={cellNumber} texto={texto} size={20} />
          </span>
        </p>

        <p style={{ marginBottom: '3px' }}>
          {processo.processo}
          {'    '}
          <Icon.ArrowDown />
          <Icon.ArrowUp />
        </p>
      </div>
      <hr />
    </div>
  )
}

Processo.propTypes = {
  processo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Processo
