import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const HomeScreen = () => {

  console.log('Passou pelo Home')
  
  return (
    <Container fluid>
      <Row>
        <Col sm={12} style={{ backgroundColor: ' #eaeded ', width: '420px', minHeight: '89.7vh' }}>

          <div className="text-center py-3 mt-4">
            <h1 style={{ textShadow: '1px 1px 1px lightgrey' }}>Seja Bem vindo ao pesquisajus!</h1>
          </div>
          <div>

          <div  style={{ marginLeft: '20%', width: '60%', fontSize: '24px', textAlign: 'center' }}>

            <div>O pesquisajus é um aplicativo moderno feito para facilitar a consulta de processos judiciais</div>
            <br></br>

            <div>Ele possui uma base de dados própria, que foi construída a partir das decisões judiciais publicadas diariamente no Diário Oficial do TJRS - Tribunal de Justiça do Rio Grande do Sul</div>
            <br></br>

            <div>Ele permite a consulta às decisões publicadas pelo nome das partes ou pelo número do processo</div>
            <br></br>

            <div>Você também pode criar a sua lista personalizada de acompanhamento de processos de seu interesse, e se quiser, também acessar diretamente o sistema do tribunal</div>
            <br></br>

            <div>O sistema possui também uma API - interface para a consulta automatizada de dados, e também uma área para dowload de arquivos de dados para voce poder fazer as suas próprias pesquisas e análises</div>
            <br></br>

            <div>Estamos em fase de testes para o lançamento do sistema<div>
            <br></br>

            <div>Crie a sua conta de usuário e desfrute da experiência!</div>
            <br></br>

            </div>Envie uma mensagem para nós com as suas sugestões - através aba Contato, ou envie um email para contato@pesquisajus.com</div>

            </div>
          </div>

        </Col>
      </Row>
    </Container>
  )
}
export default HomeScreen
