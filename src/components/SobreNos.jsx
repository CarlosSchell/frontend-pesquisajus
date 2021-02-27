import { Link } from 'react-router-dom'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')

  return (
    <div className="my-4 text-center">
      <h2>Sobre a pesquisajus</h2>
      <h4>Versão 1.0.0</h4>

      <div style={{ color: 'white', marginTop: '65vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default SobreNos
