import Highlighter from 'react-highlight-words'
import { Button } from 'react-bootstrap'
// import '../../custom.css'
// import incluiProcessoLista from '../../utils/incluiProcessoLista.js'
import calculateDays from '../../utils/calculateDays.js'
import textToClipboard from '../../utils/textToClipboard'
import court from '../../utils/court.png'

//<Publicacao key={index} publicacao={publicacao} textToHighlight={''} incluiProcessoLista ={incluiProcessoLista } />

const Publicacao = ({ publicacao, textToHighlight, incluiProcessoLista }) => {

  // console.log('incluiProcessoLista : ', incluiProcessoLista)

  //const uf       =  publicacao.uf
  const cidade = publicacao.cidade
  const grau = publicacao.grau

  let descgrau = ''
  if (grau === '1') {
    descgrau = 'Primeiro Grau'
  } else {
    descgrau = 'Segundo Grau'
  }

  const diario = publicacao.diario
  const pagina = parseInt(publicacao.pagina).toString()
  const dia = publicacao.dia
  const mes = publicacao.mes
  const ano = publicacao.ano

  const data_atual = new Date()

  const data_diario = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia))

  let arr_badge = []
  let badge_text = ''
  let badge_color = ''
  arr_badge = calculateDays(data_atual, data_diario)
  badge_text = arr_badge[0]
  badge_color = arr_badge[1]

  const foro = publicacao.foro

  let descforo = ''
  if (grau === '1') {
    descforo = foro
  } else {
    descforo = ''
  }

  const vara = publicacao.vara
  const desctipo = publicacao.desctipo ?? ''
  const processo = publicacao.processo
  //const outronumero =  publicacao.outronumero
  //const origemg1    = publicacao.origemg1
  const partes  = publicacao.partes ?? ''
  const descricao  = partes.substr(0, 24)
  const assunto = publicacao.assunto ?? '' 
  const decisao = publicacao.decisao

  const onClickIncluirProcesso = (processo, descricao) => {
    // console.log('onClickIncluirProcesso :', processo, descricao)
    incluiProcessoLista({ processo, descricao })
  }

  return (
    <div>
      
      <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '30px', color: 'black', textAlign: 'left' }}>

        <div className="d-flex flex-row justify-content-between" 
              style={{ display: 'flex', marginBottom: '05px', marginTop: '0px',    alignItems: 'center' }}>

          <div className="d-flex flex-row justify-content-start">
            <div className="notification" style={{ backgroundColor: badge_color }}>
              <span>
                {badge_text}
              </span>
            </div>
            <span style={{ color: 'blue', fontSize: '1.25em', marginLeft: '20px' }}>
              {'Processo: ' + processo}
            </span>
          </div>

          <div className="d-flex flex-row justify-content-end">
            <a
              href="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
              onClick={(e) => textToClipboard(processo)}
              target="_blank"
              rel="noreferrer"
              style={{}}
            >
              <Button variant="outline-info" className="ml-5" >
                <div>
                  Consultar no TJRS
                  <img className="ml-2 justify-content-end" src={court} alt={court} width="20px" height="22px" />
                </div>
              </Button>
            </a>

            {(incluiProcessoLista) ?  <Button variant="outline-info" 
              className="ml-5 justify-content-end" 
              onClick = {() => {onClickIncluirProcesso(processo, descricao)} }
              >
              Incluir nos Meus Processos
            </Button> : ''}

          </div>
        </div>

        <div>
          <span style={{ color: 'darkblue', fontSize: '1.2em', fontWeigth: '900' }}>
            {'TJRS ' + dia + '/' + mes + '/' + ano}
          </span>
          <span style={{ color: 'black', fontSize: '1.1em', fontWeigth: '300' }}>
            {'   -   Diário: ' + diario + ' - Pág. ' + pagina + '   -   ' + descgrau + '  -  ' + cidade + '   '}
          </span>
        </div>

        <p style={{ color: '#606060', marginBottom: '5px', marginTop: '5px' }}>
          {descforo ? descforo + ' -  ' : ''}
          {vara}
          {desctipo ? '- ' + desctipo : ''}
          {assunto ? '- ' + assunto : ''}
        </p>

        {partes && <p>Partes : '{partes}</p>}

        <p style={{ marginBottom: '3px', marginTop: '3px' }}>
          <Highlighter
            highlightClassName={'highlight'}
            highlightStyle={{ fontWeight: 'bold', backgroundColor: '#F8DE7E' }}
            searchWords={[textToHighlight]}
            autoEscape={true}
            activeIndex={-1}
            caseSensitive={false}
            textToHighlight={decisao}
          />
        </p>

        <hr style={{ marginTop: '20px'}} />

      </div>

    </div>
  )
}

export default Publicacao

// onClick={ (processo, partes) => {incluiProcessoLista(processo, partes)}}
// style={{ color: 'black', backgroundColor: '#f0f0f0' }}>
// onClick={ () => {incluiProcessoLista(processo, partes)} }