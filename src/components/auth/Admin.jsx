import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UsersList from './UsersList'
import Loader from '../Loader'
import Message from '../Message'
import ReactConfig from '../../utils/ReactConfig'

// Atualizar - está beeem desatualizado !!!

const Admin = () => {
    // eslint-disable-next-line no-console
    console.log('Entrou no Admin')

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState('')
    const [problem, setProblem] = useState('')
    // const [userLogin, setuserLogin] = useState({})

    const baseUrl = ReactConfig.baseUrl ?? ''

    //   console.log('Admin baseUrl ', baseUrl)
    //   console.log('Admin users ', users)
    //   console.log('Admin users.length ', users.length)

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                // console.log('Entrou no try')
                setLoading(true)
                // console.log('baseUrl', baseUrl)
                const url = `${baseUrl}/users/all`
                // console.log('Admin url ', url)
                // const config = { headers: { 'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + token } }
                const config = {
                    headers: { 'Content-Type': 'application/json' }
                }
                const res = await axios.get(url, {}, config)
                const usersData = res.data.users
                // console.log('Res user data depois do axios', res.data.users)

                const completedStatus = res.data.status ?? ''
                const completedMessage = res.data.message ?? ''

                if (completedStatus === 'success') {
                    setCompleted(completedMessage)
                    setProblem('')
                }
                setLoading(false)
                return usersData
            } catch (error) {
                const errorStatus = error.response.data.status
                const errorMessage = error.response.data.message
                if (errorStatus !== 'success') {
                    setCompleted('')
                    setProblem(errorMessage)
                }
                setLoading(false)
            }
            return []
        }

        const getUsersList = async () => {
            // console.log('Entrou no Admin UseEffect')
            const usersFromServer = await getAllUsers()
            // const users = usersFromServer
            setUsers(usersFromServer)
            // console.log('Users from Server', usersFromServer)
        }

        getUsersList()
    }, [baseUrl])

    // Get All Users

    return (
        <div className="body">
            <div className="innerbody" style={{ textAlign: 'left' }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Admin - Users List
                </h3>

                {completed && <Message>{completed}</Message>}
                {problem && <Message variant="danger">{problem}</Message>}
                {loading && <Loader />}

                {(users.length > 0) && (
                    <UsersList users={users} />
                )}

                <div style={{ color: 'white', marginTop: '10vh' }}>
                    <div className="my-4 text-center btn btn-info">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Voltar à página principal
                        </Link>
                    </div>
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
