import React from 'react'
import PropTypes from 'prop-types'

const SvgUsuario = ({ name }) => {
  return (
    <div style={{ alignItems: 'center', marginRight: '30px' }}>
      <div
        style={{
          fontSize: '24px',
          marginTop: '0px',
          marginBottom: '0px',
          marginLeft: '8px',
          marginRight: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
          paddingLeft: '0px',
          paddingRight: '0px'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-person"
          viewBox="0 0 16 16"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        </svg>
      </div>
      <div style={{ fontSize: '12px', color: 'black' }}>
        <strong>{name}</strong>
      </div>
    </div>
  )
}

SvgUsuario.propTypes = {
  name: PropTypes.string
}

SvgUsuario.defaultProps = {
  name: 'Usuário'
}

export default SvgUsuario
