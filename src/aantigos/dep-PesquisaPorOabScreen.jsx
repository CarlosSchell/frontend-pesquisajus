import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const PesquisaPorOabScreen = () => {
  console.log('Passou pelos PesquisaPorOabScreen')
  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <Container>
        <div className="text-center py-3">
          <br></br>
          <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Pesquisa por Número da OAB</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h4 >Em desenvovimento !</h4>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>         
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div style={{ minWidth: '360px',  fontSize: '24px', textAlign: 'center' }}>
            <br></br>
            <div style={{ color: 'white' }}>
              <div className="my-4 text-center btn btn-info">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Voltar à página principal
                </Link>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PesquisaPorOabScreen
