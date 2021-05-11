import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import axios from 'axios'
import Publicacao from '../components.pesquisameusprocessos/Publicacao'
import Loader from '../Loader'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'
// import incluiProcessoLista from '../../utils/incluiProcessoLista'
// import preencheZerosEsquerda from '../../utils/preencheZerosEsquerda'
import ReactConfig from '../../utils/ReactConfig'

const PesquisaPorNome = () => {
  console.log('Passou pelo PesquisaPorNome')
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userLogin)

  const userProcessos = useSelector((state) => state.userProcessos.processos) ?? []
  // console.log('userProcessos : ', userProcessos)
  const isProcessoModified = useSelector((state) => state.userProcessos.isProcessoModified) ?? false
  // console.log('isProcessoModified : ', isProcessoModified)

  const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  const [nomeBuscaProcesso, setNomeBuscaProcesso] = useState('')
  const [nomeParte, setNomeParte] = useState('')
  const [triggerUseEffect, setTriggerUseEffect] = useState(true)
  const [loading, setLoading] = useState(false)

  const [publicacoes, setPublicacoes] = useState([])
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')

  const incluiProcessoListaPorNome = async (newprocesso) => {
    try {
      //console.log('Entrou no incluiProcessoListaPorNome :', newprocesso)
      //console.log('userProcessos :', userProcessos)
      const new_arr_processos = [...userProcessos, newprocesso]
      // console.log('new_arr_processos :', new_arr_processos)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      await axios.post(url, { email, processos: new_arr_processos }, config)
      dispatch({
        type: PROCESSOS_UPDATE_SUCCESS,
        payload: { processos: new_arr_processos, isProcessoModified: !isProcessoModified },
      })
    } catch {}
    return
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setPublicacoes([])
    //console.log('nomepesquisa OnSubmit :', nomeBuscaProcesso.trim())
    setNomeParte(nomeBuscaProcesso.trim())
    setTriggerUseEffect(!triggerUseEffect)
  }

  const onclickPesquisar = (e) => {
    setPublicacoes([])
    setNomeBuscaProcesso(e.target.value)
  }

  useEffect(() => {
    const fetchDatasDiarioNome = async () => {
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/processo/diarios/primeiroeultimo'
      const resDatas = await axios.get(url, config)
      setDataInicial(resDatas.data.data.dataPrimeiroDiario)
      setDataFinal(resDatas.data.data.dataUltimoDiario)
      return
    }

    const fetchPublicacoes = async () => {
      const arr_publicacoes = []
      if (nomeParte !== '') {
        setLoading(true)

        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }

        const url = baseUrl + '/publicacao/texto/'
        const res = await axios.post(url, { texto: nomeParte }, config)
        // console.log(res)

        let publicacoesFromFetch = res.data.data.publicacoes
        if (publicacoesFromFetch.length > 0) {
          for (let i = 0; i < publicacoesFromFetch.length; i++) {
            arr_publicacoes.push(publicacoesFromFetch[i])
          }
        }
        setLoading(false)
        publicacoesFromFetch = []
      }
      return arr_publicacoes
    }

    const getPublicacoes = async () => {
      setPublicacoes([])
      let publicacoesFromServer = await fetchPublicacoes()
      setPublicacoes(publicacoesFromServer)
      publicacoesFromServer = []
    }

    fetchDatasDiarioNome()
    getPublicacoes()
  }, [nomeParte, baseUrl, token, triggerUseEffect, dispatch])

  return (
    <div>
      <div
        style={{
          backgroundColor: '',
          margin: 'auto',
          width: '25%',
          minWidth: '340px',
          display: 'block',
          textAlign: 'center',
        }}
      >
        <h3 className="mt-2" style={{ textShadow: '1px 1px 1px lightgrey' }}>
          Pesquisa publicações
        </h3>

        <div style={{ marginBottom: '10px', fontSize: '12px' }}>
          Período: {dataInicial} a {dataFinal}
        </div>

        {loading && <Loader />}

        <div className="text-center" style={{ fontSize: '14px' }}>
          Digite o <strong>nome da parte</strong>, o <strong>código da OAB</strong> do advogado, ou o <strong>numero completo do{' '}</strong>
          <strong>processo no padrão CNJ</strong>
        </div>

        <div className="text-center" style={{ fontSize: '14px' }}>
          inclua os zeros a esquerda e os separadores
        </div>

        <Form style={{ width: '100%', fontSize: '22px' }} onSubmit={onSubmit}>
          <Form.Control
            className="mt-3"
            size="lg"
            type="text"
            placeholder="ex: 0001234-00.2021.8.21.0000"
            value={nomeBuscaProcesso}
            autoFocus
            required
            width="100%"
            maxLength="60"
            onChange={(e) => {
              onclickPesquisar(e)
            }}
          />

          <Button className="btn btn-block mt-2 mb-5" cname="commit" variant="primary" type="submit" value="Pesquisar">
            Pesquisar
          </Button>
        </Form>
      </div>

      <div>
        {publicacoes.length === 0 && nomeParte !== '' ? (
          <div className="text-center my-3">Não foram encontradas publicações</div>
        ) : (
          <div></div>
        )}

        {publicacoes.length > 0 && publicacoes.length <= 999 && (
          <div className="text-center my-3">Foram encontradas {publicacoes.length} publicações para este nome</div>
        )}

        {publicacoes.length === 1000 && (
          <div className="text-center my-3">Existem mais de {publicacoes.length} publicações para este nome</div>
        )}

        {publicacoes.length === 1000 && (
          <div className="text-center my-3">O sistema apresenta no máximo 1000 publicações</div>
        )}

        {publicacoes.length > 0 ? (
          <div className="text-center">
            <CSVLink
              data={publicacoes}
              filename={'pesquisajus.csv'}
              className="btn btn-outline-primary"
              variant="outline-info"
              style={{ textDecoration: 'none' }}
            >
              Baixar consulta em arquivo CSV
            </CSVLink>
          </div>
        ) : (
          <div></div>
        )}

        {publicacoes.length > 0 ? (
          publicacoes.map((publicacao, index) => (
            <Publicacao
              key={index}
              publicacao={publicacao}
              textToHighlight={nomeParte}
              incluiProcessoLista={incluiProcessoListaPorNome}
            />
          ))
        ) : (
          <div></div>
        )}
        <br></br>
      </div>
    </div>
  )
}

export default PesquisaPorNome

// pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'
// validateProcesso(e.target.value)

// const validateProcesso = (nroProcesso) => {
//     // console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)
//     nroProcesso = verificaZerosEsquerda(nroProcesso)
//     let isValid = false
//     if (nroProcesso.length === 25) {
//       isValid = true
//     }
//     setPublicacoes([])
//     setIsNroProcessoValido(isValid)
//     setNumeroBuscaProcesso(nroProcesso)

//     console.log('Numero do Processo: ', nroProcesso, nroProcesso.length, isValid)
//     return
//   }

// "0001234-00.2021.8.21.0000"
// pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'

// <div
//   className="d-flex flex-column justify-content-center align-items-center"
//   style={{ backgroundColor: ' #ffecd9' }}
// >

//     <div
//     className="ml-1 mr-1 d-flex flex-column justify-content-center align-items-center"
//     style={{ minWidth: '360px' }}
//   >
