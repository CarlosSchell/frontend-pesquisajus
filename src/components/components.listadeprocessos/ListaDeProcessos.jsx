import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Processos from './Processos'
import AddProcesso from './AddProcesso'
import ReactConfig from '../../utils/ReactConfig'

const ListaDeProcessos = () => {
 
  const userLogin = useSelector((state) => state.userLogin)

  const email = userLogin.email ?? ''
  const token = userLogin.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''
  // const processosFromUserLogin = userLogin.processos ?? []

  const [showAddProcesso, setShowAddProcesso] = useState(false)
  // const [processos, setProcessos] = useState(processosFromUserLogin)
  const [processos, setProcessos] = useState([])

  useEffect(() => {
    
    const fetchProcessos = async () => {
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/getprocessos'
      const res = await axios.get(url, config)
      // const res = await axios.get(url, {}, config)
      console.log('Data do Axios res : ', res)
      // const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      let processos = res.data.data.processos ?? []
      return processos
    }

    const getProcessos = async () => {
      const processosFromServer = await fetchProcessos()
      setProcessos(processosFromServer)
    }

    getProcessos()
  }, [baseUrl, email, token])

  // Add Processo
  const addProcesso = async (novoprocesso) => {
    try {
      processos.push(novoprocesso)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/gravaprocessos'
      const res = await axios.post(url, { email, processos }, config)
      console.log('Depois do axios - res : ', res)
      setProcessos(processos)
      setShowAddProcesso(!showAddProcesso)
      // dispatch redux atualizar o vetor de processos

    } catch {}
  }

  // // Delete Processo
  const deleteProcesso = async (processo, email) => {
    //   await fetch(`https://api-pesquisajus.comm.br/v1/users/${email}`, {
    //     method: 'PATCH',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify(processo),
    //   })
    //   setProcessos(processos.filter((processo) => processo.nroProcesso !== nroProcesso))
  }

  return (
    <>
      <div className="header mt-4 d-flex flex-col justify-content-between">
        <h5 style={{ color: '#9A8B4F', fontSize: '24px', fontWeight: '500' }}>Meus Processos</h5>

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
