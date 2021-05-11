import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from './Message'
import Loader from './Loader.jsx'
import ReactConfig from '../utils/ReactConfig'

const ForgotPassword = ({ location, history }) => {
  console.log('Entrou no Forgot Password!')

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  const baseUrl = ReactConfig.baseUrl ?? ''

  let messageTimer = () => {}

  // if (completed) {
  //   messageTimer = setTimeout(() => {
  //     history.push('/')
  //   }, 10000)
  // }

  if (problem) {
    messageTimer = setTimeout(() => {
      setProblem('')
    }, 2500)
  }

  useEffect(() => {
    console.log('UseEffect Forgot Password !')
    return () => {
      clearTimeout(messageTimer)
    }
  }, [])

  const forgotUserPassword = async (email, password, passwordConfirm, token) => {
    try {
      setLoading(true)
      const config = { headers: { 'Content-Type': 'application/json' } }
      const url = baseUrl + '/users/forgotpassword'
      const res = await axios.post(url, { email }, config)

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      if (completedStatus === 'success') {
        setCompleted(completedMessage)
      }
      setLoading(false)
    } catch (error) {
      // console.log('Resposta : ', error.response)

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
    forgotUserPassword(email)

    // if (!error) {
    //   messageTimer = setTimeout(() => {
    //     history.push('/')
    //   }, 2500)
    // }
    // history.push('/login')
  }

  return (
    <Container
      style={{
        width: '25%',
        minWidth: '340px',
        height: '67vh',
        display: 'block',
        textAlign: 'center',
        marginTop: '6%',
      }}
    >
      <h3 className="mb-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Nova senha
      </h3>
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
            size="lg"
            inputMode="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <Button className="btn btn-block mt-2" name="commit" variant="primary" type="submit" value="Entrar"   disabled={completed}>
          Confirmar
        </Button>

        {completed && (
          <div style={{ fontSize: '20px', color: 'black' }}>
            <div className="my-5 text-center">Verifique a sua caixa de email !</div>
          </div>
        )}

        <div style={{ color: 'white', marginTop: '10vh' }}>
          <div className="my-4 text-center btn btn-info">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>
      </Form>
    </Container>
  )
}

export default ForgotPassword
