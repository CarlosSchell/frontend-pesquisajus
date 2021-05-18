import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Container>
      <div
        style={{
          margin: 'auto',
          width: '30%',
          minWidth: '320px',
          minHeight: '90vh',
          display: 'block',
          textAlign: 'center'
        }}
      >
        <br />
        <h3 className="text-center mb-3">Página não encontrada</h3>
        <div style={{ color: 'white', marginTop: '10vh' }}>
          <br />
          <br />
          <div className="my-4 text-center btn btn-secondary">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PageNotFound
