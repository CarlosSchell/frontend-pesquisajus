import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { CSVLink } from 'react-csv'
import axios from 'axios'
import DiarioDownload from '../components/components.downloads/DiarioDownload'
// import Loader from '../components/Loader'
import ReactConfig from '../utils/ReactConfig'

const Downloads = () => {
  console.log('Passou pelo Downloads')
  const userInfo = useSelector((state) => state.userLogin)

  // const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  const [diarios, setDiarios] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchDiarios = async () => {
      try {
        setLoading(true)
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/diarios/todos'
        const res = await axios.get(url, config)

        //console.log('res : ', res)
        //console.log('res data  : ', res.data)
        //console.log('res data data  : ', res.data.data)
        // console.log('res data data diarios : ', res.data.data.diarios)
        let arr_diarios = []
        let diariosFromFetch = res.data.data.diarios
        if (diariosFromFetch.length > 0)  {
          //console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          for (let i = 0; i < diariosFromFetch.length; i++) {
            let diarioVetor = diariosFromFetch[i]
            let nroDiario = diariosFromFetch[i]['diario']
            let gnameDiario = diariosFromFetch[i]['gname']
            //console.log('nroDiario : ', nroDiario, gnameDiario)
            //console.log('diarioVetor : ', diarioVetor)
            arr_diarios.push(diariosFromFetch[i])
          }
          diariosFromFetch = []
        }

        setLoading(false)
        setError(false)
        //console.log('arr_diarios : ', arr_diarios)
        return arr_diarios
      } catch (error) {}
    }

    const getDiarios = async () => {
      const diariosFromServer = await fetchDiarios()
      setDiarios(diariosFromServer)
    }

    getDiarios()
  }, [baseUrl, token])

  //}, [diarios, baseUrl, token, dispatch])

  return (
    <div>
      <h3 className="mt-4" style={{ textShadow: '1px 1px 1px lightgrey', textAlign: 'center'}}>Baixar Edições do Diário Oficial do TJRS</h3>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '3%', marginRight: '3%' }}>
        {diarios.length > 0 ? (
          diarios.map((diario, index) => <DiarioDownload key={index} diario={diario} token={token}/>)
        ) : (
          <div className="text-center">Não foram encontrados diarios para download</div>
        )}
      </div>
      
      <div style={{ color: 'white', textAlign: 'center'}}>
        <div className="my-5 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Downloads
