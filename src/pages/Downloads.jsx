import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import DiarioDownload from '../components/components.downloads/DiarioDownload.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message'
import ReactConfig from '../utils/ReactConfig'


const Downloads = () => {
  console.log('Passou pelo Downloads')

  const [diario, setDiario] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const userInfo = useSelector((state) => state.userLogin)
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  useEffect(() => {
    const fetchDiario = async () => {
      try {
        setLoading(true)
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/diarios/todos'   
        const res = await axios.get(url, config)

        console.log('res : ', res)
        console.log('res data  : ', res.data)
        console.log('res data data  : ', res.data.data)
        console.log('res data data diarios : ', res.data.data.diarios)

        setLoading(false)
        setError(false)
        return res.data.diario
      } catch (error) {}
    }

    const getDiario = async () => {
      const diarioFromServer = await fetchDiario()
      setDiario(diarioFromServer)
    }

    //fetchDatasDiario()
    getDiario()
  }, [baseUrl, token])

  return (
    <div className="text-center py-3 mt-3">
      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Baixar Edições do Diário Oficial do TJRS</h3>
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

export default Downloads
