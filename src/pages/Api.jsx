import { Link } from 'react-router-dom'

const Api = () => {
  console.log('Passou pelo Api')
  return (
    <div className="text-center py-3 mt-3">
      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Especificação da API do pesquisajus</h3>
      <nr/>
      <div>Voce pode consultar de forma simples e direta a nossa base de dados</div>
      <br></br>
      <div>É fácil de integrar a API do pesquisajus ao seu sistema de controle de processos</div>
      <br></br>
      <div>Voce pode consultar de forma simples e direta a nossa base de dados</div>
      <br></br>
      <div>Basta digitar no browser o comando:</div>
      <br></br> 
      <div>https://api-pesquisajus.com.br:21290/v1/publicacao/(numero_completo_do_processo_CNJ)</div>
      <br></br>
      <div>exemplo: https://api-pesquisajus.com.br:21290/v1/publicacao/0007501-79.2019.8.21.0001</div>
      <br></br>

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

export default Api

// {
//   "status": "success",
//   "message": "Processo 0007501-79.2019.8.21.0001\n",
//   "data": {
//       "publicacoes": [
//           {
//               "_id": "605d2e25eec21416dc0943eb",
//               "uf": "RS",
//               "cidade": "PORTO ALEGRE",
//               "grau": "1",
//               "gname": "1-capital",
//               "diario": "6868",
//               "pagina": "0019",
//               "ano": "2020",
//               "mes": "11",
//               "dia": "11",
//               "foro": "FORO CENTRAL",
//               "vara": "12ª VARA CÍVEL",
//               "processo": "0007501-79.2019.8.21.0001",
//               "outronumero": "001/1.19.0005312-9",
//               "tipo": "",
//               "assunto": "",
//               "decisao": "001/1.19.0005312-9 (CNJ 0007501-79.2019.8.21.0001) - EDMAR GONÇALVES (PP. DIEGO CHAGAS BAPTISTA 65615/RS E LEONITA MACHRY 24679/RS) X GBOEX - GREMIO BENEFICENTE (PP. BIBIANA DA SILVA OLIVEIRA BOTTIN CAYE 78887/RS, DEBORAH SPEROTTO DA SILVEIRA 51634/RS, JULIANA BISOGNIN 92147/RS E MICHELE GERBER DORN 50016/RS). A MATÉRIA DOS AUTOS NÃO SE SUBMETE AO TEMA 977 DO STJ. FOI EXPLICITADO, NO CORPO DAQUELA DECISÃO (RESP 1.656.161/RS), QUE \"A QUESTÃO JURÍDICA A SER DIRIMIDA NO PRESENTE RECURSO CINGE-SE EM DEFINIR SE, COM O ADVENTO DO ART. 22 DA LEI N. 6.435/1977, OS VALORES MONETÁRIOS DOS BENEFÍCIOS DAS ENTIDADES ABERTAS PODEM SER ATUALIZADOS EM OBSERVÂNCIA AOS PROVIMENTOS INFRALEGAIS DO ÓRGÃO PÚBLICO REGULADOR DAS ENTIDADES ABERTAS DE PREVIDÊNCIA COMPLEMENTAR, OU SE CABE AO JUIZ APLICAR OUTRO QUE REPUTA MAIS RAZOÁVEL, POR MELHOR RECOMPOR A PERDA DO PODER AQUISITIVO DA MOEDA.\" NÃO PARECE SER O CASO DOS AUTOS. AQUI PRETENDE O REQUERENTE A REVISÃO DO EQUILÍBRIO CUSTO- BENEFÍCIO ENTRE O PRÊMIO E A EQUIVALÊNCIA DA INDENIZAÇÃO SECURITÁRIA; NÃO NECESSARIAMENTE QUE O PRÊMIO MENSAL TENHA AUMENTADO, MAS A INDENIZAÇÃO, DIMINUÍDO. O CHAMAMENTO AO PROCESSO, COMO POSTULADO, NÃO É ADMISSÍVEL NA HIPÓTESE. DISPÕE O CPC QUE A INTERVENÇÃO DE TERCEIRO É POSSÍVEL QUANDO O RÉU FOR FIADOR, E CHAMARÁ O AFIANÇADO, OS DEMAIS FIADORES, QUANDO QUALQUER DELES FOR RÉU, E DEVEDORES SOLIDÁRIOS, QUANDO A DÍVIDA É EXIGIDA DE UM (ART. 130) . NO CASO, A GBOEX AFIRMA TER FIGURADO COMO ESTIPULANTE EM CONTRATO DE SEGURO MANTIDO POR SEGURADORES DISTINTAS, QUE ORA PRETENDE CHAMAR AO PROCESSO; A RELAÇÃO CONTRATUAL É DISTINTA E NÃO HÁ SUBSIDIARIEDADE OU SOLIDARIEDADE ENTRE ELAS, PERANTE O AUTOR. INTIMEM-SE AS PARTES PARA QUE DIGAM SE PRETENDEM A PRODUÇÃO DE OUTRAS PROVAS. NOTADAMENTE A RÉ, EM RELAÇÃO À PERÍCIA ATUARIAL. AS PROVAS NÃO REQUERIDAS SERÃO TIDAS POR DESISTIDAS. DIL. LEGAIS.",
//               "partes": "EDMAR GONÇALVES X GBOEX - GREMIO BENEFICENTE",
//               "__v": 0
//           }