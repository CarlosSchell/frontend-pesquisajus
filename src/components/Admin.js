import { useState, useEffect } from 'react'
import axios from 'axios'
import UsersList from './UsersList'
import Loader from './Loader'
import Message from './Message'

const Admin = () => {
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const [userInfo, setUserInfo] = useState({})

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

  // Lê o Cookie com o jwt token
  // Grava o cookie com o jwt token
  // function getCookie(name) {
  //   // Split cookie string and get all individual name=value pairs in an array
  //   var cookieArr = document.cookie.split(';')

  //   // Loop through the array elements
  //   for (var i = 0; i < cookieArr.length; i++) {
  //     var cookiePair = cookieArr[i].split('=')

  //     /* Removing whitespace at the beginning of the cookie name
  //       and compare it with the given string */
  //     if (name === cookiePair[0].trim()) {
  //       // Decode the cookie value and return
  //       return decodeURIComponent(cookiePair[1])
  //     }
  //   }
  //   // Return null if not found
  //   return null
  // }

  // console.log('Valor do Get Cookie : ', getCookie('jwt'))

  // get.cookie('jwt', token, {
  //   expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN_HOURS * 60 * 60 * 1000),
  //   httpOnly: true,
  //   secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  // })

  // Get All Users
  const getAllUsers = async () => {
    try {
      console.log('Entrou no try')
      // setLoading(true)
      const token =
        'eyJlbWFpbCI6ImNhcmxvcy5zY2hlbGxlbmJlcmdlckBnbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYxMjEyNDEzNywiZXhwIjoxNjEyMjEwNTM3fQ.1_N2thTPSQ1u4jURk7aRsC8wFa1UmrB3w-MAG2jV_EA'

      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const res = await axios.get('https://cryptic-falls-65427.herokuapp.com/api/v1/users/', {}, config)

      console.log('Res depois do axios', res.data.users)
      // setUserInfo({})
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
    <>
      <div className="about text-center py-3">
        <h4>Users List 2</h4>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      {users.length > 0 ? <UsersList users={users} /> : 'Não existem usuários cadastrados'}
    </>
  )
}

// {users.map((user, index) => {index}))}

// <div></div>
// {users.map((user, index) => (<div>{user.email}{' '}{user.password}{' '}{token}</div>))}

// {users.map((user, index) => ({user.email}) )}

// {(users.length = 0 ? <div>"No Users To Show"</div> : <div>"One User To Show"</div>)}

export default Admin