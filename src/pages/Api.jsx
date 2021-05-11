import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Api = () => {
  console.log('Passou pelo Api')
  return (
    <div
      style={{
        backgroundColor: '#eaeded',
        width: '40%',
        margin: 'auto',
        minWidth: '340px',
        minHeight: '92vh',
        textAlign: 'center',
      }}
    >
      <h3 className="my-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Especificação da API
      </h3>

      <div style={{ fontSize: '20px', textAlign: 'center' }}>
        <p>É fácil de integrar a API-REST (base de dados) do pesquisajus ao seu sistema de controle de processos.</p>

        <p>
          As informações das publicações estão classificadas de acordo com a sua natureza, fornecendo uma rica base de
          informações para análise
        </p>

        <p>A consulta se faz com o uso de token de autenticação</p>

        <div className="my-1">
            <p>Caso tenha interesse, entre em Contato conosco pelo email&nbsp;:</p>
            <Link to="/contact" style={{ fontSize: '20px' }}>
              <Button variant="outline-dark" size="md" style={{ color: 'darkblue' }}>
                contato@pesquisajus.com
              </Button>
            </Link>
          </div>

        <br></br>
        <div style={{ color: 'white' }}>
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

export default Api

// <div
//   style={{
//     backgroundColor: '#eaeded',
//     width: '40%',
//     margin: 'auto',
//     marginLeft: '10px',
//     marginRight: '10px',
//     minWidth: '340px',
//     minHeight: '80vh',
//     textAlign: 'center',
//   }}
// >
