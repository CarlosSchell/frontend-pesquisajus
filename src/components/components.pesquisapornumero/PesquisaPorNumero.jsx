import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Publicacao from '../components.pesquisameusprocessos/Publicacao'
import Loader from '../Loader'
// import incluiProcessoLista from '../../utils/incluiProcessoLista'
import ReactConfig from '../../utils/ReactConfig'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'
import verificaZerosEsquerda from '../../utils/verificaZerosEsquerda'


const PesquisaPorNumero = () => {
  console.log('Passou pelo PesquisaPorNumero')
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userLogin)

  const userProcessos = useSelector((state) => state.userProcessos.processos) ?? []
  // console.log('userProcessos : ', userProcessos)
  const isProcessoModified = useSelector((state) => state.userProcessos.isProcessoModified) ?? false
  // console.log('isProcessoModified : ', isProcessoModified)

  const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''
  const [numeroBuscaProcesso, setNumeroBuscaProcesso] = useState('')

  const [strBusca, setStrBusca] = useState('')
  const [triggerUseEffect, setTriggerUseEffect] = useState(true)
  const [isNroProcessoValido, setIsNroProcessoValido] = useState(false)
  const [loading, setLoading] = useState(false)

  const [publicacoes, setPublicacoes] = useState([])
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')

  const incluiProcessoListaPorNumero= async (newprocesso) => {  
    try {
      // console.log('Entrou no incluiProcessoListaPorNome :', newprocesso)
      console.log('userProcessos :', userProcessos)
      const new_arr_processos = [...userProcessos, newprocesso]
      console.log('new_arr_processos :', new_arr_processos)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      await axios.post(url, { email, processos: new_arr_processos }, config)
      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: new_arr_processos, isProcessoModified: !isProcessoModified} })
    } catch {}
    return
  }

  const validateProcesso = (nroProcesso) => {
    // console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)
    nroProcesso = verificaZerosEsquerda(nroProcesso)
    let isValid = false
    if (nroProcesso.length === 25) {
      isValid = true
    } 
    setPublicacoes([])
    setIsNroProcessoValido(isValid)
    setNumeroBuscaProcesso(nroProcesso)
    
    console.log('Numero do Processo: ', nroProcesso, nroProcesso.length, isValid)
    return
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (isNroProcessoValido) {
      // console.log('numeroBuscaProcesso.trim() :', numeroBuscaProcesso.trim())
      setStrBusca(numeroBuscaProcesso.trim())
      setTriggerUseEffect(!triggerUseEffect)
    } else {
      console.log('numeroBuscaInvalido')
    }
  }

  useEffect(() => {
    console.log('Entrou no useEffect')

    const fetchDatasDiarioNumero = async () => {
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/publicacao/diarios/primeiroeultimo' 
      const resDatas = await axios.get(url, config)
      setDataInicial(resDatas.data.data.dataPrimeiroDiario)
      setDataFinal(resDatas.data.data.dataUltimoDiario)
      return 
    }


    const fetchPublicacoes = async () => {
      const arr_publicacoes = []
      if (strBusca !== '') {
        setLoading(true)
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/numero/' + strBusca
        const res = await axios.get(url, config)
        let publicacoesFromFetch = res.data.data.publicacoes
        if (publicacoesFromFetch.length > 0) {
          for (let i = 0; i < publicacoesFromFetch.length; i++) {
            arr_publicacoes.push(publicacoesFromFetch[i])
          }
          publicacoesFromFetch = []
        }
        setLoading(false)
      }
      return arr_publicacoes
    }

    const getPublicacoes = async () => {
      setPublicacoes([])
      let publicacoesFromServer = await fetchPublicacoes()
      setPublicacoes(publicacoesFromServer)
      publicacoesFromServer = []
    }

    fetchDatasDiarioNumero()
    getPublicacoes()
  }, [strBusca, baseUrl, triggerUseEffect, token, dispatch])

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: ' #ffecd9' }}
    >
      <div className="text-center py-3 mt-3">
        <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Pesquisa publicações pelo numero do processo</h3>
        <p style={{ fontSize: '18px' }}>Período da Base de Dados : {dataInicial} a {dataFinal}</p>
      </div>

      {loading && <Loader />}

      <div
        className="ml-1 mr-1 mt-2 mb-1 d-flex flex-column justify-content-center align-items-center"
      >
        <p className="text-center" style={{ fontSize: '22px', marginBottom: '2px' }}>Digite o numero completo do processo no padrão CNJ</p>
        <p className="text-center" style={{ fontSize: '20px', marginBottom: '2px' }}>ex: 1234567-00.2021.8.21.0000 inclua os separadores ( - / . )</p>
        <Form inline style={{ width: '100%', }} onSubmit={onSubmit}>
          <Form.Control
            style={{ fontSize: '22px', marginLeft: '8%'}}
            className="mb-2"
            type="text"
            placeholder=""
            value={numeroBuscaProcesso}
            autoFocus
            required
            width="90%"
            maxLength="25"
            minLength="25"
            pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'
            onChange={(e) => validateProcesso(e.target.value) }
          />
          <Button className="mb-2 ml-0" 
              style={{ fontSize: '22px' }}
              name="commit" 
              variant="primary" 
              type="submit" 
              value="Pesquisar" 
              disabled={!isNroProcessoValido}  
          >
            Pesquisar
          </Button>
        </Form>
      </div>

      <div>

        {publicacoes.length === 0 && strBusca !== '' ? (
          <div className="text-center">Não foram encontradas publicações para este numero de processo</div>
        ) : (
          <div></div>
        )}

        {(publicacoes.length > 0 && publicacoes.length <= 49)  && <div className="text-center">Foram encontradas {publicacoes.length} publicações para este numero de processo</div>}
        
        {publicacoes.length === 50 && 
          <div className="text-center">Existem mais de {publicacoes.length} publicações para este numero  de processo</div>}

        {publicacoes.length === 50 ? (
          <div>
            <div className="text-center">O sistema apresenta no máximo 50 publicações</div>
          </div>
        ) : (
          <div></div>
        )}

        {publicacoes.length > 0 ? (
          publicacoes.map((publicacao, index) => (
            <Publicacao key={index} publicacao={publicacao} textToHighlight={''} incluiProcessoLista={incluiProcessoListaPorNumero} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default PesquisaPorNumero
