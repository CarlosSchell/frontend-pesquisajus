import { Link } from 'react-router-dom'

const Contato = () => {
  console.log('Passou pelo App')
  return (
    <div className="my-4 text-center">
      <h2> Entre em contato conosco:</h2>
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

export default Contato
