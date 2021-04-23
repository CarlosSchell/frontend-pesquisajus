import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')

  return (
    <div style={{ backgroundColor: '#eaeded' }}>
        <Container>
            <br></br>
            <div className="text-center py-3">
                <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Sobre nós</h3>
                <br></br>

                <div style={{ fontSize: '22px', textAlign: 'center' }}>
                    <div>
                    O pesquisajus é uma startup 100% gaúcha composta por profissionais em desenvolvimento de
                    software
                    </div>
                    <br></br>

                    <div>
                    Seu propósito é o de democratizar o acesso às informações judiciais através do uso de um sistema de consulta
                    simples e leve
                    </div>
                    <br></br>

                    <div>Em sua construção foram empregadas as mais modernas técnicas de construção de sistemas</div>
                    <br></br>

                    <div>
                    Esperamos que voce aprecie o aplicativo, e contamos com a sua valiosa opinião sobre a experiência de uso e
                    sugestão de novas features
                    </div>
                    <br></br>

                    <div>
                        <p>Entre em contato conosco através aba Contato ou pelo email&nbsp;</p>
                        <a href="/contato" rel="noreferrer" target="_blank"  style={{ fontSize: '22px'}}>
                            contato@pesquisajus.com
                        </a>
                    </div>
                </div>

                <br></br>
                <br></br>

                <h4 style={{ color: 'black', fontSize: '18px' }}>Versão: 23 Abril 2021 10:00h</h4>

                <div style={{ color: 'white' }}>
                    <div className="mt-5 text-center btn btn-info">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Voltar à página principal
                        </Link>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>


            </div>
        </Container>
    </div>
  )
}

export default SobreNos
