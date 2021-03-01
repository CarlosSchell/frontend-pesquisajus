import { Link } from 'react-router-dom'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')
  const buildNumber = 'Versao: Sat Feb 27 2021 12:30am'

  return (
    <div className="my-4 text-center">
      <h2>Sobre a pesquisajus</h2>
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
