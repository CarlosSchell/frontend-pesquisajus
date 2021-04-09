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

  const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  const userProcessos = useSelector((state) => state.userProcessos) ?? []

  const [nomeBuscaProcesso, setNomeBuscaProcesso] = useState('')
  const [nomeParte, setNomeParte] = useState('')
  const [loading, setLoading] = useState(false)
  const [publicacoes, setPublicacoes] = useState([])


  const incluiProcessoListaPorNome= async (newprocesso) => {  
    try {
      console.log('Entrou no incluiProcessoListaPorNome :', newprocesso)
      console.log('userProcessos :', userProcessos)
      const new_arr_processos = []
      for (let i = 0; i < userProcessos.length; i++) {
        new_arr_processos.push(userProcessos[i])
        console.log(i, userProcessos[i])
      }
      new_arr_processos.push(newprocesso)
      console.log('new_arr_processos :', new_arr_processos)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      // const Obj = { email, processos: new_arr_processos }

      // console.log('Obj: ', Obj)
      // await axios.post(url, { email, processos: new_arr_processos }, config)

      // console.log('Payload: ', { processos: new_arr_processos })
      // console.log('Alou res: ', res)
      // console.log('Belou res.data.data.processos: ', res.data.data.processos)
      // let processosFromDatabase = res.data.data.processos ?? []

      // dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: new_arr_processos } })
    } catch {}
    return
  }


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('nomepesquisa OnSubmit :', nomeBuscaProcesso.trim())
    setNomeParte(nomeBuscaProcesso.trim())
  }

  useEffect(() => {
    const fetchPublicacoes = async () => {
      const arr_publicacoes = []
      if (true) {
        setLoading(true)
        // if (nomeParte !== '') {
        console.log('Entrou no Fetch nome do axios')
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/texto/' + nomeParte
        const res = await axios.get(url, config)
        console.log('Saiu do Fetch nome do axios')
        // console.log('URl : ', url)
        // console.log(res)
        // console.log(res.data.data.publicacoes)
        let publicacoesFromFetch = res.data.data.publicacoes
        if (publicacoesFromFetch.length > 0) {
          //console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          for (let i = 0; i < publicacoesFromFetch.length; i++) {
            let nroProcesso = publicacoesFromFetch[i]['processo']
            let nomePartes = publicacoesFromFetch[i]['partes']
            console.log('nroProcesso : ', nroProcesso, nomePartes)
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
  }, [nomeParte, baseUrl, token, dispatch])

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ backgroundColor: ' #ffecd9' }}
    >
      <div className="text-center py-3 mt-3">
        <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Pesquisa publicações pelo nome da parte</h3>
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
            onChange={(e) => setNomeBuscaProcesso(e.target.value)}
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

        {publicacoes.length > 0 && publicacoes.length <= 999 && nomeParte !== '' ? (
          <div className="text-center">Foram encontradas {publicacoes.length} publicações para este nome</div>
        ) : (
          <div className="text-center">Foram encontradas mais de {publicacoes.length} publicações para este nome</div>
        )}

        {publicacoes.length >= 1000 ? (
          <div>
            <div className="text-center">O sistema apresenta no máximo 1000 publicações</div>
          </div>
        ) : (
          <div></div>
        )}

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
