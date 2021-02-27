import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UsersList from './UsersList'
import Loader from './Loader.jsx'
import Message from './Message'
import ReactConfig from '../utils/ReactConfig'

// Atualizar - está beeem desatualizado !!!

const Admin = () => {

  console.log('Entrou no Admin')

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [userLogin, setuserLogin] = useState({})

  const baseUrl = ReactConfig.baseUrl ?? ''

  console.log('Admin baseUrl ',baseUrl)
  console.log('Admin users ',users)
  console.log('Admin users.length ', users.length)

  useEffect( () => {

    const getUsersList = async () => {
      console.log('Entrou no Admin UseEffect')
      const usersFromServer = await getAllUsers()
      //const users = usersFromServer
      setUsers(usersFromServer)
      console.log('Users from Server', usersFromServer)
    }

    getUsersList()
  },[])

  // Get All Users
  const getAllUsers = async () => {
    //try {
      console.log('Entrou no try')
      setLoading(true)

      console.log('baseUrl', baseUrl)
      const url = baseUrl + '/users/all'
      console.log('Admin url ', url)

      // const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const config = { headers: { 'Content-Type': 'application/json'} }
      const res = await axios.get(url, {}, config)

      console.log('Res user data depois do axios', res.data.users)
      
      setLoading(false)
      setError(false)
      return res.data.users
    // } catch (error) {
    //   console.log('Entrou no catch')
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log('Entrou no catch - Caso 1 : error.response out of 200 range')
    //     console.log(error.response.data.message)
    //     console.log(error.response.status)
    //     setLoading(false)
    //     setError(error.response.data.message)
    //     return []
    //   } else if (error.request) {
    //     console.log('Entrou no catch - Caso 2 : The request was made but no response was received')
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     setLoading(false)
    //     console.log(error.request)
    //     return []
    //   } else {
    //     console.log('Entrou no catch - Caso 3 : Something happened in setting up the request')
    //     // Something happened in setting up the request that triggered an Error
    //     setLoading(false)
    //     console.log('Error', error.message)
    //     return []
    //   }
    // }
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
