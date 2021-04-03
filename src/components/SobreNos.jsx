import { Link } from 'react-router-dom'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')
  const buildNumber = 'Versao: 01 Abril 2021 21:30h'

  return (
    <div className="my-4 text-center">
      <h3>Sobre a pesquisajus</h3>
      <br></br>
      <h4 style={{ color: 'black' }}>{buildNumber}</h4>

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
