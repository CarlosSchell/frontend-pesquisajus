import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
//import axios from 'axios'
import Processos from './Processos'
import AddProcesso from './AddProcesso'

const ListaDeProcessos = () => {

  // const dispatch = useDispatch()
  //const userLogin = useSelector((state) => state.userLogin)
  //const { userLogin } = userLogin

  const [showAddProcesso, setShowAddProcesso] = useState(false)
  const [processos, setProcessos] = useState([])

  // useEffect(() => {
  //   const getProcessos = async () => {
  //     const processosFromServer = await fetchProcessos()
  //     setProcessos(processosFromServer)
  //   }
  //   console.log('Entrou no Lista de Processos useEffect')
  //   getProcessos()
  // }, [])

  // Fetch Processos
  // const fetchProcessos = async () => {
  //   // console.log('Entrou no fetchProcessos')
  //   let token = userLogin.token

  //   const config = {headers: {Authorization: `Bearer ${token}`,},}
  //   const { data } = await axios.get(`https://www.api-pesquisajus.com.br/api/v1/users/getprocessos`, config)
  //   console.log('Data do Axios data.user.processos : ', data.user.processos)
    
  //   let processos = data.user.processos ?? []

  //   return processos
  // }

  // let refreshTokens = []
  //refreshTokens.push(refreshToken)
  //refreshTokens = refreshToken.filter(token => token !== req.body.token)

  // Fetch Processo
  // const fetchProcesso = async (id) => {
  //   const res = await fetch(`https://api-pesquisajus.com.br/users/getprocessos${id}`)
  //   const data = await res.json()
  //   return data
  // }

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

  }

  // Delete Processo
  const deleteProcesso = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setProcessos(processos.filter((processo) => processo.id !== id))
  }

  return (
    <>
      <Container fluid className="header mt-4 d-flex flex-col justify-content-between">
        <h4>Meus Processos</h4>

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
        <hr/>
        {processos.length > 0 ? (
          <Processos processos={processos} onDelete={deleteProcesso} />
        ) : (
          'Não existem processos cadastrados'
        )}
      </div>

      
    </>
  )
}

export default ListaDeProcessos
