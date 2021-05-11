import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <div
        style={{
          margin: 'auto',
          width: '30%',
          minWidth: '320px',
          minHeight: '90vh',
          display: 'block',
          textAlign: 'center',
        }}
      >
        <br></br>
        <h3 className="text-center mb-3">Página não encontrada</h3>
        <div style={{ color: 'white', marginTop: '10vh' }}>
          <div className="my-4 text-center btn btn-info">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
