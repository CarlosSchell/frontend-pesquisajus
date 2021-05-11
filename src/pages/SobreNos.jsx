import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')

  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <div
        style={{
          margin: 'auto',
          width: '40%',
          minWidth: '320px',
          minHeight: '90vh',
          display: 'block',
          textAlign: 'center',
        }}
      >
        <br></br>
          <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Sobre o pesquisajus</h3>

          <div style={{ fontSize: '22px', textAlign: 'center', marginTop: '10px' }}>
            <div>O pesquisajus é uma startup composta por profissionais em desenvolvimento de software</div>

            <div>
              Seu propósito é o de democratizar o acesso às informações judiciais através do uso de um sistema de
              consulta simples e leve
            </div>

            <div>Em sua construção foram empregadas as mais modernas técnicas de construção de sistemas</div>

            <div>
              Esperamos que voce aprecie o aplicativo, e contamos com a sua valiosa opinião sobre a experiência de uso e
              sugestão de novas features
            </div>


            <div style={{ marginTop: '10px' }}>
              <p>Entre em contato conosco através aba Contato ou pelo email&nbsp;</p>
              <Link to="/contact" style={{ fontSize: '20px' }}>
                <Button variant="outline-dark" size="md" style={{ color: 'darkblue' }}>
                  contato@pesquisajus.com
                </Button>
              </Link>
            </div>
          </div>

          <br></br>


          <div style={{ color: 'white' }}>
            <div className="mt-5 text-center btn btn-info">
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Voltar à página principal
              </Link>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
    </div>
  )
}

export default SobreNos
