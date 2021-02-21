import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UsersList from './UsersList'
import Loader from './Loader.jsx'
import Message from './Message'

// Atualizar - está beeem desatualizado !!!

const Admin = () => {
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [userLogin, setuserLogin] = useState({})

  // const baseUrl = 'https://www.api-pesquisajus.com.br/v1/'
  const baseUrl = 'http://localhost:21115/v1'

  useEffect(() => {
    const getUsersList = async () => {
      console.log('Entrou no UseEffect')
      const usersFromServer = await getAllUsers()
      // const users = usersFromServer
      setUsers(usersFromServer)
      console.log('Users from Server', usersFromServer)
    }
    getUsersList()
  }, [])

  // Get All Users
  const getAllUsers = async () => {
    try {
      console.log('Entrou no try')
      // setLoading(true)
      const token =
        'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmxvcy5zY2hlbGxlbmJlcmdlckBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYxMzg2NTk2NSwiZXhwIjoxNjEzOTUyMzY1fQ.nsGy5_bIkC-vklKc-M1d4gFfjFoGrUtYk6NniGzvzebspargx228KOTW7N7yAo-AgJ2Pmmg1hLZvzcX11y9ojSOa7dZRj0OkUruD1tqM2Kyv1DKSONHDGD7OEdniXvpYGOrHycScAUgR-Lr5Es2rUlV06OkQTMwkRsQg6IHl07MeqZU7BZ1nnfI7aBFpNQHE9B3VsEg_XCffzKoeTriEocQViDqGl0vQ66cw0f0XDwupwv19KrfCtdBQOg2IOa9HjUBEYGl9KKMRZbzwAjXaWR9e8Od8aSoKBqjPHNATi4N7xZO-uh9IguLJ5-0ZgCJ2VxDcaamvj9aH2iyGdTrgFA'

      const url = baseUrl + '/users/'
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }

      const res = await axios.get(url, {}, config)

      console.log('Res depois do axios', res.data.users)
      // setuserLogin({})
      setLoading(false)
      setError(false)
      return res.data.users
    } catch (error) {
      console.log('Entrou no catch')
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Entrou no catch - Caso 1 : error.response out of 200 range')
        console.log(error.response.data.message)
        console.log(error.response.status)
        setLoading(false)
        setError(error.response.data.message)
      } else if (error.request) {
        console.log('Entrou no catch - Caso 2 : The request was made but no response was received')
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        console.log('Entrou no catch - Caso 3 : Something happened in setting up the request')
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
    }
  }

  return (
    <div className="my-4 text-center">
      <div>
        <h2>Admin - Users List 2</h2>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      {users.length > 0 ? <UsersList users={users} /> : 'Não existem usuários cadastrados'}

      <div style={{ color: 'white', marginTop: '10vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

// {users.map((user, index) => {index}))}

// <div></div>
// {users.map((user, index) => (<div>{user.email}{' '}{user.password}{' '}{token}</div>))}

// {users.map((user, index) => ({user.email}) )}

// {(users.length = 0 ? <div>"No Users To Show"</div> : <div>"One User To Show"</div>)}

export default Admin
