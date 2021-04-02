import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import Publicacao from '../components.listadepublicacoes/Publicacao'
import Loader from '../Loader'
import ReactConfig from '../../utils/ReactConfig'

const PesquisaPorNome = () => {
  const dispatch = useDispatch()
  const userLoginInfo = useSelector((state) => state.userLogin)
  //const userProcessosInfo = useSelector((state) => state.userProcessos) ?? []

  const [nomeBuscaProcesso, setNomeBuscaProcesso] = useState('')
  const [nomeParte, setNomeParte] = useState('')
  const [loading, setLoading] = useState(false)

  const [publicacoes, setPublicacoes] = useState([])

  const token = userLoginInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  //const todays_date = new Date()

  console.log('Passou pelo PesquisaPorNome')

  // const validateNomeBuscaProcesso = (nomeBuscaProcesso) => {
  //   console.log('Nome de Busca do Processo: ', nomeBuscaProcesso)
  //   if (!nomeBuscaProcesso) return false
  //   if (nomeBuscaProcesso.length > 0) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

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
        const publicacoesFromFetch = res.data.data.publicacoes
        if (publicacoesFromFetch.length > 0) {
          //console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          for (let i = 0; i < publicacoesFromFetch.length; i++) {
            let nroProcesso = publicacoesFromFetch[i]['processo']
            let nomePartes = publicacoesFromFetch[i]['partes']
            console.log('nroProcesso : ', nroProcesso, nomePartes)
            arr_publicacoes.push(publicacoesFromFetch[i])
          }
        }
        setLoading(false)
      }
      return arr_publicacoes
    }

    const getPublicacoes = async () => {
      const publicacoesFromServer = await fetchPublicacoes()
      setPublicacoes(publicacoesFromServer)
      console.log('publicacoesFromServer : ', publicacoesFromServer)
    }

    getPublicacoes()
  }, [nomeParte, baseUrl, token, dispatch])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" 
          style={{ backgroundColor: ' #ffecd9', }}>

      <div className="text-center py-3 mt-3">
        <h3>
          Pesquisa publicações pelo nome da parte
        </h3>
      </div>

      {loading && <Loader />}

      <div className="ml-1 mr-1 mt-1 d-flex flex-column justify-content-center align-items-center" style={{ minWidth: '540px'}}>
        <Form inline
          style={{ width: '100%'}}
          onSubmit={onSubmit}>
          <Form.Control
          style={{ width: '80%'}}
            className="mb-2"
            type="text"
            placeholder=""
            value={nomeBuscaProcesso}
            autoFocus
            required
            width= '80%'
            maxLength="60"
            onChange={(e) => setNomeBuscaProcesso(e.target.value)}
          />
          <Button className="mb-2 ml-0" name="commit" variant="primary" type="submit" value="Pesquisar">
            Pesquisar
          </Button>
        </Form>
      </div>

      <div>
        {publicacoes.length > 0 ? (
          <div>
            <div className="text-center">`Foram encontradas {publicacoes.length} publicações para estes processos`</div>
            <div className="text-center">`O sistema apresenta no máximo 200 publicações`</div>
          </div>
        ) : (
            <div className="text-center">'Não foram encontradas publicações para estes processos'</div>
        )}

        {publicacoes.length > 0 ? (
              publicacoes.map((publicacao, index) => (
                <Publicacao key={index} publicacao={publicacao} textToHighlight={nomeParte} />
              ))
        ) : (
            <div></div>
        )}
      </div>

    </div>
  )
}

export default PesquisaPorNome
