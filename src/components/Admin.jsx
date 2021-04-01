import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UsersList from './UsersList.jsx'
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

  console.log('Admin baseUrl ', baseUrl)
  console.log('Admin users ', users)
  console.log('Admin users.length ', users.length)

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        console.log('Entrou no try')
        setLoading(true)

        console.log('baseUrl', baseUrl)
        const url = baseUrl + '/users/all'
        console.log('Admin url ', url)

        // const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const config = { headers: { 'Content-Type': 'application/json' } }
        const res = await axios.get(url, {}, config)

        console.log('Res user data depois do axios', res.data.users)

        setLoading(false)
        setError(false)
        return res.data.users
      } catch (error) {}
    }

    const getUsersList = async () => {
      console.log('Entrou no Admin UseEffect')
      const usersFromServer = await getAllUsers()
      //const users = usersFromServer
      setUsers(usersFromServer)
      console.log('Users from Server', usersFromServer)
    }

    getUsersList()
  }, [baseUrl])

  // Get All Users

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
