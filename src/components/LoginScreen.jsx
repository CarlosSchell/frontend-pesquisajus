import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ReactConfig from '../utils/ReactConfig'

import { USER_LOGIN_SUCCESS } from '../constants/userConstants'
import { PROCESSOS_UPDATE_SUCCESS } from '../constants/processosConstants'

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch()

  console.log('Passou pelo Login')

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

  useEffect(() => {
    console.log('UseEffect Login clear timeout!')
    return () => {
      clearTimeout(messageTimer)
    }
  }, [])

  const loginUserInternal = async (email, password) => {
    try {
      setLoading(true)
      const config = { headers: { 'Content-Type': 'application/json' } }

      const url = baseUrl + '/users/login'
      const res = await axios.post(url, { email, password }, config)
      let payload = res.data.data

      const name = payload.name
      //const email = payload.email
      const role = payload.role
      const token = payload.token
      const processos = payload.processos

      const userLoginInfo = { name, email, role, token }
      const userProcessosInfo = { processos }

      dispatch({ type: USER_LOGIN_SUCCESS, payload: userLoginInfo })
      localStorage.setItem('userLogin', JSON.stringify(userLoginInfo))

      dispatch({ type: PROCESSOS_UPDATE_SUCCESS, payload: userProcessosInfo })
      // localStorage.setItem('userProcessos', JSON.stringify(userProcessosInfo))

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      if (completedStatus === 'success') {
        setCompleted(completedMessage)
      }
      setLoading(false)
    } catch (error) {
      console.log('Resposta : ', error.response)

      const errorStatus = error.response.data.status
      const errorMessage = error.response.data.message

      // console.log('Erro.response.status : ', errorStatus)       //401
      // console.log('Erro.response.message : ', errorMessage)
      // console.log('Erro.response.data.error : ', error.response.data.error)

      if (errorStatus !== 'success') {
        // 'fail'
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
  const validateForm = () => {
    return email.length > 0 && password.length > 0
  }

  return (
    <div style={{ backgroundColor: '#eaeded', marginRight: '8px' }}>
    <div
      style={{
        margin: 'auto',
        width: '25%',
        minWidth: '340px',
        minHeight: '80vh',
        display: 'block',
        textAlign: 'center',
      }}
    >
      <h3 className="my-2" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Entre na sua conta
      </h3>

      {completed && <Message>{completed}</Message>}
      {problem && <Message variant="danger">{problem}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} className="mb-4 mx-auto">
        <InputGroup className="my-3" controlid="email">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <Icon.Envelope />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            autoFocus={true}
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
            style={{ fontSize: '18px' }}
          />
        </InputGroup>

        <InputGroup className="my-4" controlid="password">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <Icon.Lock />
            </InputGroup.Text>
          </InputGroup.Prepend>
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
            style={{ fontSize: '18px' }}
          />
        </InputGroup>

        <Button
          className="btn btn-block mt-2 mb-5"
          name="commit"
          variant="primary"
          type="submit"
          value="Entrar"
          disabled={!validateForm()}
        >
          Entrar
        </Button>
      </Form>

      <div style={{ fontSize: '1.1rem' }}>
        <div className="mt-5">
          <Link to="/forgotpassword">
            <strong>Esqueci minha senha</strong>
          </Link>
        </div>

        <div className=" mt-5" style={{ fontSize: '1.1rem' }}>
          <strong>Não possui uma conta?{'  '}</strong>
          <div>
            <Link to="/register">
              <strong>Crie sua Conta</strong>
            </Link>
          </div>
        </div>

        <br></br>
        <div style={{ color: 'white' }}>
          <div className="my-4 text-center btn btn-info">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>

        <br></br>

        <div>
          <div className="text-center my-2">
            <Link to="">Termos de Uso</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="">Privacidade dos Dados</Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default LoginScreen
