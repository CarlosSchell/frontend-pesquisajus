import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Processos from './Processos'
import AddProcesso from './AddProcesso'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'
import ReactConfig from '../../utils/ReactConfig'

const ListaDeProcessos = () => {
  const dispatch = useDispatch()
  const userLoginInfo = useSelector((state) => state.userLogin)
  // const userProcessosInfo = useSelector((state) => state.userProcessos) ?? []

  const email = userLoginInfo.email ?? ''
  const token = userLoginInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  const [showAddProcesso, setShowAddProcesso] = useState(false)
  const [processos, setProcessos] = useState([])

  let isNewProcessos = false

  useEffect(() => {
    const fetchProcessos = async () => {
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/getprocessos'
      const res = await axios.get(url, config)

      let processosFromDatabase = res.data.data.processos ?? []
      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: processosFromDatabase } })
      // localStorage.setItem('userProcessos', JSON.stringify({ processos: processosFromDatabase }))

      return processosFromDatabase
    }

    const getProcessos = async () => {
      const processosFromServer = await fetchProcessos()
      setProcessos(processosFromServer)
    }

    getProcessos()
  }, [baseUrl, email, token, isNewProcessos, dispatch])

  // Add Processo
  const addProcesso = async (newprocesso) => {
    try {

      console.log('Entrou no onAdd - Acima do AddProcesso - newprocesso :', newprocesso)
      processos.push(newprocesso)

      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      const res = await axios.post(url, { email, processos }, config)

      let processosFromDatabase = res.data.data.processos ?? []
      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: processosFromDatabase } })
      // localStorage.setItem('userProcessos', JSON.stringify({ processos: processosFromDatabase }))

      console.log('Saiu do onAdd - Acima do AddProcesso - processosFromDatabase :', processosFromDatabase)

      setProcessos(processos)
      setShowAddProcesso(!showAddProcesso)
      isNewProcessos = true
    } catch {}
  }

  //
  const deleteProcesso = async (delprocesso) => {
    try {
      const newprocessos = (processos.filter((processo) => (processo.processo !== delprocesso.processo)))
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      const res = await axios.post(url, { email, processos: newprocessos }, config)

      let processosFromDatabase = res.data.data.processos ?? []
      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: { processos: processosFromDatabase } })
      // localStorage.setItem('userProcessos', JSON.stringify({ processos: processosFromDatabase }))

      setProcessos(newprocessos)
      setShowAddProcesso(!showAddProcesso)
      isNewProcessos = true
    } catch {}
  }

  return (
    <>
      <div className="header mt-4 d-flex flex-col justify-content-between">
        <div style={{ color: '#9A8B4F', fontSize: '24px', fontWeight: '500' }}>Meus Processos</div>

        <Button
          className="sm"
          variant={showAddProcesso ? 'primary' : 'info'}
          onClick={() => {
            setShowAddProcesso(!showAddProcesso)
          }}
        >
          {showAddProcesso ? 'Fechar' : 'Incluir'}
        </Button>
      </div>

      <div className="mt-2">
        {showAddProcesso && <AddProcesso onAdd={addProcesso} />}
        <hr />
        {processos.length > 0 ? (
          <Processos processos={processos} onDelete={deleteProcesso} />
        ) : (
          <div className="text-center">'Não existem processos cadastrados'</div>
        )}
      </div>
    </>
  )
}

export default ListaDeProcessos

// Fetch Processos
// const fetchProcessos = async () => {
//   const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
//   const url = baseUrl + '/users/getprocessos'

//   const res = await axios.get(url, { email }, config)
//   console.log('Data do Axios res.user.processos : ', res.user.processos)
//   let processos = res.user.processos ?? []

//   return processos
// }

// // Get Processo
// const getProcessosFromServer = async (processo, email) => {
//   try {
//     const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
//     const url = baseUrl + '/users/getprocessos'

//     const res = await axios.get(url, { email, listaDeProcessos }, config)

//     setListaDeProcessos(listadDeProcessos)
//   } catch {}
// }
