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
  console.log('userProcessos : ', userProcessos)
  const isProcessoModified = useSelector((state) => state.userProcessos.isProcessoModified) ?? false
  console.log('isProcessoModified : ', isProcessoModified)

  const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  const [numeroBuscaProcesso, setNumeroBuscaProcesso] = useState('')
  const [strBusca, setStrBusca] = useState('')
  const [isNroProcessoValido, setIsNroProcessoValido] = useState(false)
  const [loading, setLoading] = useState(false)

  const [publicacoes, setPublicacoes] = useState([])

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
    console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)
    nroProcesso = verificaZerosEsquerda(nroProcesso)
    setNumeroBuscaProcesso(nroProcesso)
    let isValid = false
    if (nroProcesso.length === 25) {
      isValid = true
    } 
    setIsNroProcessoValido(isValid)
    return
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if (isNroProcessoValido) {
      console.log('numeropesquisa OnSubmit :', numeroBuscaProcesso.trim())
      setStrBusca(numeroBuscaProcesso.trim())
    }
  }


  useEffect(() => {
    console.log('Entrou no useEffect')
    const fetchPublicacoes = async () => {
      const arr_publicacoes = []
      if (true) {
        setLoading(true)
        // if (nomeParte !== '') {
        console.log('Entrou no Fetch numero do axios')
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/numero/' + strBusca
        const res = await axios.get(url, config)
        console.log('Saiu do Fetch nome do axios')
        console.log('URl : ', url)
        // console.log(res)
        // console.log(res.data.data.publicacoes)
        let publicacoesFromFetch = res.data.data.publicacoes
        if (publicacoesFromFetch.length > 0) {
          //console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          for (let i = 0; i < publicacoesFromFetch.length; i++) {
            let nroProcesso = publicacoesFromFetch[i]['processo']
            console.log('nroProcesso : ', nroProcesso, strBusca)
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
      console.log('publicacoesFromServer : ', publicacoesFromServer)
      publicacoesFromServer = []
    }

    getPublicacoes()
  }, [strBusca, baseUrl, token, dispatch])

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: ' #ffecd9' }}
    >
      <div className="text-center py-3 mt-3">
        <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Pesquisa publicações pelo numero do processo</h3>
      </div>

      {loading && <Loader />}

      <div
        className="ml-1 mr-1 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        <Form inline style={{ width: '100%'}} onSubmit={onSubmit}>
          <Form.Control
            style={{ fontSize: '22px' }}
            className="mb-2"
            type="text"
            placeholder=""
            value={numeroBuscaProcesso}
            autoFocus
            required
            width="80%"
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

        {publicacoes.length > 0 && publicacoes.length <= 49 && strBusca !== '' ? (
          <div className="text-center">Foram encontradas {publicacoes.length} publicações para este numero de processo</div>
        ) : (
          <div className="text-center">Foram encontradas mais de {publicacoes.length} publicações para este numero  de processo</div>
        )}

        {publicacoes.length >= 50 ? (
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

//             pattern='/[0-9]{7,1}[-][0-9]{2}[.][0-9]{4}[.][0-9][.][0-9]{2}[.][0-9]{4}/'