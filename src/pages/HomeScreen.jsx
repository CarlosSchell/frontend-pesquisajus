import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

const HomeScreen = () => {
  console.log('Passou pelo Home')

  return (
    <div style={{ backgroundColor: '#eaeded'}}>
        <Container style={{   }}>
            <div style={{  minWidth: '350px', minHeight: '92vh', textAlign: 'center' }}>
                <br></br>
                <div className="text-center py-3">
                    <h1 style={{ textShadow: '1px 1px 1px lightgrey' }}>Bem vindo ao pesquisajus!</h1>
                </div>

                <div style={{fontSize: '22px' }}>

                    <div>O pesquisajus é um aplicativo moderno feito para facilitar a consulta de processos judiciais</div>
                    <br></br>

                    <div>
                    Ele possui uma base de dados própria, que foi construída a partir das decisões judiciais publicadas
                    diariamente no Diário Oficial do TJRS - Tribunal de Justiça do Rio Grande do Sul
                    </div>
                    <br></br>

                    <div>Ele permite a consulta às decisões publicadas pelo nome das partes ou pelo número do processo</div>
                    <br></br>

                    <div>
                    Você também pode criar a sua lista personalizada de acompanhamento de processos de seu interesse, e se
                    quiser, também acessar diretamente o sistema do tribunal
                    </div>
                    <br></br>

                    <div>
                    O sistema possui também uma API - interface para a consulta automatizada de dados - e também uma área para
                    baixar arquivos de dados para voce poder fazer as suas próprias pesquisas e análises
                    </div>
                    <br></br>

                    <div>
                        <p>Envie as suas sugestões através aba Contato ou pelo email&nbsp;</p>
                        <a href="/contato" rel="noreferrer" target="_blank"  style={{ fontSize: '20px'}}>
                            contato@pesquisajus.com
                        </a>
                    </div>
                    <br></br>
                    <br></br>
                    
                    <Link to="/register" style={{}}>
                    <Button variant="info" size="lg">
                        Crie aqui sua conta de usuário!
                    </Button>
                    </Link>

                    <br></br>
                    <br></br>

                    <div style={{ fontSize: '22px', color: 'grey' }}>© 2021 pesquisajus - Todos os direitos reservados.</div>
                    <br></br>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HomeScreen
