import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import axios from 'axios'
import Processos from './Processos'
import AddProcesso from './AddProcesso'

const ListaDeProcessos = () => {
  const [showAddProcesso, setShowAddProcesso] = useState(false)
  const [processos, setProcessos] = useState([])

  useEffect(() => {
    // const getProcessos = async () => {
    //   const processosFromServer = await fetchProcessos()
    //   setProcessos(processosFromServer)
    // }
    // console.log('Entrou no Lista de Processos useEffect')
    // getProcessos()
  }, [])

  // Fetch Processos
  const fetchProcessos = async () => {

    console.log('Entrou no fetchProcessos')


    // user email
    const token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlcmVuYUBnbWFpbC5jb20iLCJpYXQiOjE2MTMxNjA0NDEsImV4cCI6MTYxMzI0Njg0MX0.T2qoBjzISFeZCS7HkPVmEhRHbntbR4DIcD_Fqcu4lxzc9PZ31WI6QjMgFDgY32mI9--lWrJWkrhh-rwSCm2YKn58gj9sNjFHIpa3EMGdvKvP7PWZX_hDijxmTsEQLtO02aR0CmB54EFpvw0vxcn40c4BfBuE3AjtylFin0LJ2OpiZ2Qx0zexGfBXyZzW9orP4uPvIp8zqV5KGeNi8z0Xnm67_xcOvHerr1YPh2pVxfl2IoXfmmSjWV16awpNtT2HDvi9AUKNxAAhhkiLg95BHB8GmRLm87cBUliUaueGW_RL1UeUfgK74zxUlhQCE1dbZb7QH0_ys5lJhac59yURxA"

    const config = {headers: {Authorization: `Bearer ${token}`,},}

    const data = await axios.get(`https://www.api-pesquisajus.com.br/api/v1/users/getprocessos`, config)

    // const config = { headers: { 'Content-Type': 'application/json' } }
    // //                              'Authorization': `Bearer  ${token}` }}
    // const data = await axios.get(
    //   'https://api-pesquisajus.com.br/users/getprocessos',
    //   { },
    //   config
    // )   
    console.log('Data do Axios Processos : ', data) //  res = await axios('https://api-pesquisajus.com.br/api/v1/users/getprocessos')

    return data
  }

  // let refreshTokens = []
  //refreshTokens.push(refreshToken)
  //refreshTokens = refreshToken.filter(token => token !== req.body.token)

  // Fetch Processo
  const fetchProcesso = async (id) => {
    const res = await fetch(`https://api-pesquisajus.com.br/users/getprocessos${id}`)
    const data = await res.json()
    return data
  }

  // Add Processo
  const addProcesso = async (processo) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(processo),
    })

    const data = await res.json()

    setProcessos([...processos, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newProcesso = { id, ...processo }
    // setProcessos([...processos, newProcesso])
  }

  // Delete Processo
  const deleteProcesso = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setProcessos(processos.filter((processo) => processo.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const processoToToggle = await fetchProcesso(id)
    const updProcesso = { ...processoToToggle, reminder: !processoToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updProcesso),
    })

    const data = await res.json()

    setProcessos(
      processos.map((processo) => (processo.id === id ? { ...processo, reminder: data.reminder } : processo))
    )
  }

  return (
    <>
      <Container fluid className="header mt-5 d-flex flex-col justify-content-between">
        <h3>Meus Processos</h3>

        <Button
          className="sm"
          color={showAddProcesso ? 'red' : 'green'}
          variant={showAddProcesso ? 'secondary' : 'info'}
          onClick={() => {
            setShowAddProcesso(!showAddProcesso)
          }}
        >
          {showAddProcesso ? 'Fechar' : 'Incluir'}
        </Button>
      </Container>

      

      <div>
        {showAddProcesso && <AddProcesso onAdd={addProcesso} />}
        <hr />
        {processos.length > 0 ? (
          <Processos processos={processos} onDelete={deleteProcesso} onToggle={toggleReminder} />
        ) : (
          'Não existem processos cadastrados'
        )}
      </div>

      
    </>
  )
}

export default ListaDeProcessos
