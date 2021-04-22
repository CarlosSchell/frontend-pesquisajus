import { Link } from 'react-router-dom'

const SobreNos = () => {
  console.log('Passou pelo Sobre nós')

  return (
    <div className="text-center py-3 mt-3">
      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Sobre nós</h3>
      <br></br>

      <div style={{ marginLeft: '20%', width: '60%', fontSize: '24px', textAlign: 'center' }}>
        <div>
          O pesquisajus é uma startup 100% gaúcha e foi desenvolvido por profissionais em desenvolvimento de
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
          Envie uma mensagem para nós com as suas sugestões - através aba Contato, ou envie um email para
          contato@pesquisajus.com
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h4 style={{ color: 'black' }}>Última versão do site publicada em: 21 Abril 2021 10:00h</h4>

      <div style={{ color: 'white' }}>
        <div className="mt-5 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SobreNos
