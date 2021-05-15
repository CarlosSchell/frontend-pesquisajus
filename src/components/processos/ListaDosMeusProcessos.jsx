import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Processos from './Processos'
import AddProcesso from './AddProcesso'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'
import ReactConfig from '../../utils/ReactConfig'

const ListaDosMeusProcessos = () => {
  // eslint-disable-next-line no-console
  console.log('Entrou no lista dos meus Processos')
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userLogin)
  // const userProcessos = useSelector((state) => state.userProcessos.processos) ?? []
  // console.log('userProcessos : ', userProcessos)
  const isProcessoModified = useSelector((state) => state.userProcessos.isProcessoModified) ?? false
  // console.log('isProcessoModified : ', isProcessoModified)
  const email = userInfo.email ?? ''
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''
  const [showAddProcesso, setShowAddProcesso] = useState(false)
  const [processos, setProcessos] = useState([])
  const [isModified, setIsModified] = useState(false)

  useEffect(() => {
    const fetchProcessos = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const url = `${baseUrl}/users/getprocessos`
      const res = await axios.get(url, config)
      const processosFromDatabase = res.data.data.processos ?? []
      dispatch({
        type: PROCESSOS_UPDATE_SUCCESS,
        payload: {
          processos: processosFromDatabase,
          isProcessoModified: true
        }
      })
      setProcessos(processosFromDatabase)
      // console.log('processos: ', processos)
      return processosFromDatabase
    }
    fetchProcessos()
  }, [baseUrl, email, isModified, isProcessoModified, token, dispatch])

  // Add Processo
  const gravaNovoProcesso = async (newprocesso) => {
    try {
      const newArrProcessos = []
      for (let i = 0; i < processos.length; i += 1) {
        newArrProcessos.push(processos[i])
      }
      newArrProcessos.push(newprocesso)
      setProcessos(newArrProcessos)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const url = `${baseUrl}/users/gravaprocessos`
      // const Obj = { email, processos: newArrProcessos }
      // console.log('Obj: ', Obj)
      await axios.post(url, { email, processos: newArrProcessos }, config)
      dispatch({
        type: PROCESSOS_UPDATE_SUCCESS,
        payload: { processos: newArrProcessos }
      })
      setProcessos(newArrProcessos)
      setIsModified(!isModified)
      // setShowAddProcesso(!showAddProcesso)
    } catch {
      const a = 1
      // eslint-disable-next-line no-console
      console.log(a)
    }
  }

  //
  const deleteProcesso = async (delprocesso) => {
    try {
      const newprocessos = processos.filter(
        (processo) => processo.processo !== delprocesso.processo
      )
      // console.log('Entrou no deleteProcesso - newprocesso :', newprocessos)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const url = `${baseUrl}/users/gravaprocessos`
      await axios.post(url, { email, processos: newprocessos }, config)
      dispatch({
        type: PROCESSOS_UPDATE_SUCCESS,
        payload: { processos: newprocessos }
      })
      setProcessos(newprocessos)
      setIsModified(!isModified)
    } catch {
      const a = 1
      // eslint-disable-next-line no-console
      console.log(a)
    }
  }

  return (
    <div>
      <div className="header mt-4 d-flex flex-col justify-content-between">
        <div
          style={{
            color: '#9A8B4F',
            fontSize: '24px',
            fontWeight: '500'
          }}
        >
          Meus Processos
        </div>

        <Button
          size="md"
          variant={showAddProcesso ? 'primary' : 'info'}
          onClick={() => {
            setShowAddProcesso(!showAddProcesso)
          }}
        >
          {showAddProcesso ? 'Fechar' : 'Incluir'}
        </Button>
      </div>

      <div className="mt-2">
        {showAddProcesso && <AddProcesso gravaNovoProcesso={gravaNovoProcesso} />}
        <hr />
        {processos.length > 0 ? (
          <Processos processos={processos} onDelete={deleteProcesso} />
        ) : (
          <div className="text-center">Não existem processos cadastrados</div>
        )}
      </div>
    </div>
  )
}

export default ListaDosMeusProcessos
