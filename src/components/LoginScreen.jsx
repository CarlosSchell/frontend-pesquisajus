import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../components/Message'
import Loader from '../components/Loader'
import ReactConfig from '../utils/ReactConfig'

import { USER_LOGIN_SUCCESS } from '../constants/userConstants'

const LoginScreen = ({ location, history }) => {
  const dispatch = useDispatch()

  console.log('Passou pelo Login Screen')

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
    }, 2500)
  }

  if (problem) {
    messageTimer = setTimeout(() => {
      setProblem('')
    }, 2500)
  }

  useEffect(() => {
    console.log('UseEffect !')
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

      console.log('Resposta do Axios :', payload)

      dispatch({ type: USER_LOGIN_SUCCESS, payload: payload })
      localStorage.setItem('userLogin', JSON.stringify(payload))

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
    <Container
      style={{
        width: '420px',
        height: '67vh',
        display: 'block',
        textAlign: 'center',
        marginTop: '6%',
      }}
    >
      <h2 className="mb-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Entre na sua conta
      </h2>
      {completed && <Message>{completed}</Message>}
      {problem && <Message variant="danger">{problem}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} className="mb-4 mx-auto">
        <InputGroup className="my-4" controlid="email">
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
            placeholder="Digite seu endereço de email"
            maxLength="50"
            size="50"
            inputMode="email"
            required
            onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Digite sua senha (6 a 20 caracteres)"
            maxLength="20"
            minLength="6"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <Button
          className="btn btn-block mt-2"
          name="commit"
          variant="primary"
          type="submit"
          value="Entrar"
          disabled={!validateForm()}
        >
          Entrar
        </Button>
      </Form>

      <div style={{ fontSize: '1.1rem', marginTop: '15vh' }}>
        <div className="mt-5">
          <Link to="/forgotpassword">
            <strong>Esqueci minha senha</strong>
          </Link>
        </div>

        <div className="py-3" style={{ fontSize: '1.1rem' }}>
          <strong>Não possui uma conta?{'  '}</strong>
          <Link to="/register">
            <strong>Crie sua Conta Grátis</strong>
          </Link>
        </div>

        <div style={{ color: 'white', marginTop: '10vh' }}>
          <div className="my-4 text-center btn btn-info">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>

        <div>
          <div className="text-center my-2">
            <Link to="">Termos de Uso</Link>
          </div>
          <div className="my-2 text-center">
            <Link to="">Privacidade dos Dados</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default LoginScreen
