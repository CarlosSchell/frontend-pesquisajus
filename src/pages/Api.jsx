import { Link } from 'react-router-dom'

const Api = () => {
  console.log('Passou pelo Api')
  return (
    <div className="text-center py-3 mt-3">

      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Especificação da API do pesquisajus</h3>
      <br></br>
      <br></br>

      <div style={{ marginLeft: '15%', width: '70%', fontSize: '24px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px'}}>É fácil de integrar a API (base de dados) do pesquisajus ao seu sistema de controle de processos</div>

        <div>As informações das publicações estão classificadas de acordo com a sua natureza, fornecendo uma rica base de informações para análise</div>
        <br></br>
        <div>Nesta fase de lançamento do sistema deixamos a base de dados aberta para consulta</div>
        <div>Posteriormente a consulta se fará com o uso de token de autenticação</div>
        <br></br>
        <div>Voce pode consultar de forma simples e direta a nossa base de dados:</div>

        <div>Digite no browser o comando abaixo com o número do processo desejado: </div>

        <br></br>
        <div style={{ marginBottom: '10px'}}><strong>Exemplos:</strong></div>
        <div>
          <p>Processo do 1º Grau: (clique no link) : &nbsp;
          <a href='https://api-pesquisajus.com.br:21290/v1/publicacao/0172905-22.2018.8.21.0001' rel="noreferrer" target='_blank'>https://api-pesquisajus.com.br:21290/v1/publicacao/0007501-79.2019.8.21.0001</a></p>
        </div>
        <div>
        <p>Processo do 2º Grau: (clique no link) : &nbsp;
          <a href='https://api-pesquisajus.com.br:21290/v1/publicacao/0007501-79.2019.8.21.0001' rel="noreferrer" target='_blank'>https://api-pesquisajus.com.br:21290/v1/publicacao/0013918-32.2021.8.21.7000</a></p>
        </div>

        <div style={{ color: 'white', marginTop: '10vh' }}>
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

