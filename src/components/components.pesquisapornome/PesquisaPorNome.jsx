import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import axios from 'axios'
import Publicacao from '../components.pesquisameusprocessos/Publicacao'
import Loader from '../Loader'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'
// import incluiProcessoLista from '../../utils/incluiProcessoLista'
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

  const incluiProcessoListaPorNome= async (newprocesso) => {  
    try {
      //console.log('Entrou no incluiProcessoListaPorNome :', newprocesso)
      //console.log('userProcessos :', userProcessos)
      const new_arr_processos = [...userProcessos, newprocesso]
      // console.log('new_arr_processos :', new_arr_processos)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      await axios.post(url, { email, processos: new_arr_processos }, config)
      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: new_arr_processos, isProcessoModified: !isProcessoModified} })
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
      const url = baseUrl + '/publicacao/diarios/primeiroeultimo' 
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
        const url = baseUrl + '/publicacao/texto/' + nomeParte
        const res = await axios.get(url, config)
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
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: ' #ffecd9' }}
    >
      <div className="text-center py-3 mt-3">
        <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Pesquisa publicações pelo nome da parte</h3>
        <p>Período da Base de Dados : {dataInicial} a {dataFinal}</p>
      </div>

      {loading && <Loader />}

      <div
        className="ml-1 mr-1 mt-3 d-flex flex-column justify-content-center align-items-center"
        style={{ minWidth: '540px' }}
      >
        <Form inline style={{ width: '100%' }} onSubmit={onSubmit}>
          <Form.Control
            style={{ width: '80%' }}
            className="mb-2"
            type="text"
            placeholder=""
            value={nomeBuscaProcesso}
            autoFocus
            required
            width="80%"
            maxLength="60"
            onChange={(e) => {onclickPesquisar(e)}}
          />
          <Button className="mb-2 ml-0" name="commit" variant="primary" type="submit" value="Pesquisar">
            Pesquisar
          </Button>
        </Form>
      </div>

      <div>
        {publicacoes.length === 0 && nomeParte !== '' ? (
          <div className="text-center">Não foram encontradas publicações para este nome</div>
        ) : (
          <div></div>
        )}

        {(publicacoes.length > 0 && publicacoes.length <= 999)  && <div className="text-center">Foram encontradas {publicacoes.length} publicações para este nome</div>}
        
        {publicacoes.length === 1000 && 
          <div className="text-center">Existem mais de {publicacoes.length} publicações para este nome</div>}

        {publicacoes.length === 1000 && <div className="text-center">O sistema apresenta no máximo 1000 publicações</div>}

        {publicacoes.length > 0 ? (
          <div className="text-center mt-2">
              <CSVLink data={publicacoes}
                      filename={"pesquisajus.csv"}
                      className="btn btn-outline-primary"
                      variant="outline-info" 
                      style={{ textDecoration: 'none' }}> 
                Baixar consulta em arquivo CSV
              </CSVLink>
          </div>
        ) : (
          <div></div>
        )}

        {publicacoes.length > 0 ? (
          publicacoes.map((publicacao, index) => (
            <Publicacao key={index} publicacao={publicacao} textToHighlight={nomeParte} incluiProcessoLista={incluiProcessoListaPorNome}/>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default PesquisaPorNome
