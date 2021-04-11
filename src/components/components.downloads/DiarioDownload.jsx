// import { Button } from 'react-bootstrap'

//<DiarioDownload key={index} diario={diario}} />

const DiarioDownload = ({ diario }) => {

  console.log('Passou pelo DiarioDownload : ', diario)

  //const uf     =  diario.uf
  const cidade = diario.cidade
  const grau = diario.grau

  let descgrau = ''
  if (grau === '1') {
    descgrau = 'Primeiro Grau'
  } else {
    descgrau = 'Segundo Grau'
  }

  // const diario = diario.diario
  const dia = diario.dia
  const mes = diario.mes
  const ano = diario.ano
  //const data_diario = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia))


  //const onClickIncluirProcesso = (processo, descricao) => {
    // console.log('onClickIncluirProcesso :', processo, descricao)
    //incluiProcessoLista({ processo, descricao })
 // }

  return (

      <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '30px', color: 'black', textAlign: 'left' }}>

        <div className="d-flex flex-row justify-content-between" 
              style={{ display: 'flex', marginBottom: '05px', marginTop: '0px',    alignItems: 'center' }}>

          <div className="d-flex flex-row justify-content-start">
            <span style={{ color: 'blue', fontSize: '1.25em', marginLeft: '20px' }}>
              {'Diario: ' + diario}
            </span>
          </div>


          <div>
            Lista de Edições do Diário Oficial do TJRS
          </div>


          <div>
            <span style={{ color: 'darkblue', fontSize: '1.2em', fontWeigth: '900' }}>
              {'TJRS ' + dia + '/' + mes + '/' + ano}
            </span>
            <span style={{ color: 'black', fontSize: '1.1em', fontWeigth: '300' }}>
              {'   -   Diário: ' + diario + '   -   ' + descgrau + '  -  ' + cidade + '   '}
            </span>
          </div>

        <hr style={{ marginTop: '20px'}} />

      </div>

    </div>
  )
}

export default DiarioDownload

// onClick={ (processo, partes) => {incluiProcessoLista(processo, partes)}}
// style={{ color: 'black', backgroundColor: '#f0f0f0' }}>
// onClick={ () => {incluiProcessoLista(processo, partes)} }