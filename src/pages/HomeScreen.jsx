import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const HomeScreen = () => {
  console.log('Passou pelo Home')
  const { userLogin } = useSelector((state) => state)

  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <div style={{ width: '40%', margin: 'auto', minWidth: '340px', minHeight: '92vh', textAlign: 'center' }}>
        <div className="text-center mt-2">
          <h1 style={{ textShadow: '1px 1px 1px lightgrey' }}>pesquisajus</h1>
        </div>

        <div style={{ fontSize: '20px' }}>
          <div style={{ marginTop: '15px' }}>
            Bem vindo ao moderno aplicativo que facilita a sua consulta a processos judiciais
          </div>

          <div style={{ marginTop: '8px' }}>
            Consulte seu processo pelo nome da parte, número do processo, número da OAB ou acesse o link para o sistema
            do tribunal
          </div>

          <div style={{ marginTop: '8px' }}>
            O pesquisajus utiliza os dados do Diário Oficial do <strong>TJRS</strong>
          </div>

          {userLogin && userLogin.name !== 'Convidado' ? (
            <div>
              <div >
                <div style={{ fontSize: '24px', color: 'darkblue', marginTop: '15px' }}>Olá {userLogin.name}!</div>
              </div>
              <div style={{ fontSize: '24px', color: 'darkblue', marginTop: '10px', marginBottom: '15px' }}>
                Bem vindo!
              </div>

              <div style={{ fontSize: '22px', color: 'darkblue', marginTop: '10px', marginBottom: '50px' }}>
                Clique nos ícones do menu para utilizar os sistema!
              </div>
            </div>
          ) : (
            <div style={{ marginTop: '15px' }}>
              <Link to="/login">
                <div style={{ fontSize: '26px', color: 'darkblue', marginTop: '10px', marginBottom: '15px' }}>
                  Bem vindo!
                </div>

                <Button variant="info" size="lg">
                  Já sou usuário!
                </Button>
              </Link>

              <div style={{ fontSize: '24px', color: 'darkblue', marginTop: '5px', marginBottom: '5px' }}>ou</div>

              <Link to="/register">
                <Button variant="info" size="lg">
                  Novo usuário!
                </Button>
              </Link>
            </div>
          )}

          {/* <div style={{ marginTop: '15px' }}>
            O sistema permite a consulta automatizada de dados (API) e baixar arquivos para voce poder fazer as suas
            próprias pesquisas e análises
          </div> */}

          <div style={{ fontSize: '18px', color: 'grey', marginTop: '25px' }}>© 2021 pesquisajus - v.10/05/21</div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
