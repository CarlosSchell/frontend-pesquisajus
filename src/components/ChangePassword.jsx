import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from './Message'
import Loader from './Loader.jsx'

const ChangePassword = ({ location, history }) => {
  console.log('Entrou no changePassword normal!')

  const { userLogin } = useSelector((state) => state)

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  // const baseUrl = 'https://www.api-pesquisajus.com.br/v1/'
  const baseUrl = 'http://localhost:21115/v1'

  const email = userLogin.email ?? 'convidado@exemplo.com.br'
  const token = userLogin.token ?? ''

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

  const changePasswordInternal = async (email, password, passwordConfirm, token) => {
    try {
      setLoading(true)
      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/changepassword' //+ token
      const res = await axios.patch(url, { email, password, passwordConfirm }, config)

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      console.log('Retorno do Axios : ', res)

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
    changePasswordInternal(email, password, passwordConfirm, token)
  }

  // Page Actions
  const validateForm = () => {
    return password === passwordConfirm
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
        Digite a sua nova senha
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
            size="60"
            inputMode="email"
            required
            disabled
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

        <InputGroup className="my-4" controlid="passwordConfirm">
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
            value={passwordConfirm}
            placeholder="Digite sua senha (6 a 20 caracteres)"
            maxLength="20"
            minLength="6"
            required
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
          Confirmar
        </Button>
      </Form>

      <div style={{ color: 'white', marginTop: '10vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
      
    </Container>
  )
}

export default ChangePassword
