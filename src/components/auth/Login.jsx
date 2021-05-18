import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

import Message from '../Message'
import Loader from '../Loader'
import ReactConfig from '../../utils/ReactConfig'
import { USER_LOGIN_SUCCESS } from '../../constants/userConstants'
import { PROCESSOS_UPDATE_SUCCESS } from '../../constants/processosConstants'

const LoginScreen = ({ history }) => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Login')

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState('')
    const [problem, setProblem] = useState('')
    const baseUrl = ReactConfig.baseUrl ?? ''

    let messageTimer = () => {}
    // console.log("Problema : ", problem)
    // console.log("Completed : ", completed)

    if (completed) {
        messageTimer = setTimeout(() => {
            history.push('/')
        }, 1500)
    }

    if (problem) {
        messageTimer = setTimeout(() => {
            setProblem('')
        }, 2500)
    }

    useEffect(() => clearTimeout(messageTimer), [])

    const loginUserInternal = async () => {
        try {
            setLoading(true)
            const config = { headers: { 'Content-Type': 'application/json' } }
            const url = `${baseUrl}/users/login`
            const res = await axios.post(url, { email, password }, config)

            const payload = res.data.data
            const { name } = payload
            // const email = payload.email
            const { role } = payload
            const { token } = payload
            const { processos } = payload

            const userLoginInfo = {
                name,
                email,
                role,
                token
            }
            const userProcessosInfo = { processos }

            dispatch({ type: USER_LOGIN_SUCCESS, payload: userLoginInfo })
            localStorage.setItem('userLogin', JSON.stringify(userLoginInfo))

            dispatch({
                type: PROCESSOS_UPDATE_SUCCESS,
                payload: userProcessosInfo
            })
            // localStorage.setItem('userProcessos', JSON.stringify(userProcessosInfo))

            const completedStatus = res.data.status ?? ''
            const completedMessage = res.data.message ?? ''

            if (completedStatus === 'success') {
                setCompleted(completedMessage)
                setProblem('')
            }
            setLoading(false)
        } catch (error) {
            const errorStatus = error.response.data.status
            const errorMessage = error.response.data.message
            if (errorStatus !== 'success') {
                setCompleted('')
                setProblem(errorMessage)
            }
            setLoading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        loginUserInternal(email, password)
    }

    // Page Actions
    const validateForm = () => email.length > 0 && password.length > 0

    return (
        <div className="body">
            <div className="innerbody" style={{ textAlign: 'left' }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Entre na sua conta
                </h3>

                {completed && <Message>{completed}</Message>}
                {problem && <Message variant="danger">{problem}</Message>}
                {loading && <Loader />}

                <Form onSubmit={submitHandler} className="mt-2 mx-auto">
                <Form.Label className="my-0">Endereço de email</Form.Label>
                    <InputGroup className="mb-2" controlid="email">
                        <FormControl
                            autoFocus
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Endereço de email"
                            maxLength="50"
                            size="lg"
                            inputMode="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ fontSize: '20px' }}
                        />
                    </InputGroup>

                    <Form.Label className="my-0">Senha</Form.Label>
                    <InputGroup className="mb-2" controlid="password">
                        <FormControl
                            autoComplete="off"
                            className="form-control password"
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Senha (6 a 20 caracteres)"
                            maxLength="20"
                            minLength="6"
                            required
                            size="lg"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ fontSize: '20px' }}
                        />
                    </InputGroup>

                    <div style={{ textAlign: 'center',}}>
                        <Button
                            className="mt-2"
                            name="commit"
                            variant="primary"
                            type="submit"
                            size="lg"
                            block
                            value="Entrar na conta"
                            disabled={!validateForm()}>
                            Entrar na Conta
                        </Button>
                    </div>
                </Form>

                <div style={{ fontSize: '1.1rem' }}>
                    <div className="mt-5 text-center">
                        <Link to="/forgotpassword">
                            <strong>Esqueci minha senha</strong>
                        </Link>
                    </div>

                    <div className=" mt-5 text-center" style={{ fontSize: '1.1rem' }}>
                        <strong>
                            Não possui uma conta?
                            {'  '}
                        </strong>
                        <div>
                            <Link to="/register">
                                <strong>Crie sua Conta</strong>
                            </Link>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="text-center my-2">
                            <Link to="\">Termos de Uso</Link>
                        </div>
                        <div className="mt-2 text-center">
                            <Link to="\">Privacidade dos Dados</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

LoginScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default LoginScreen
