import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import { Link } from 'react-router-dom'

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from './Message'
import Loader from './Loader'
import ReactConfig from '../utils/ReactConfig.js'

const RegisterScreen = ({ location, history }) => {
  // console.log("Passou pelo Register Screen")

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  const baseUrl = ReactConfig.baseUrl ?? ''

  // let messageTimer = () => {}

  // useEffect(() => {
  //   console.log('UseEffect !')
  //   return () => {
  //     clearTimeout(messageTimer)
  //   }
  // }, [])

  // Page Actions
  const validateForm = () =>
    email.length > 0
    && password.length > 5
    && password.length <= 20
    && password === passwordConfirm

  const registerUserScreen = async (name, email, password, passwordConfirm) => {
    try {
      // eslint-disable-next-line no-console
      console.log('Entrou no Register user !')
      setLoading(true)
      // const config = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+token } }
      const config = { headers: { 'Content-Type': 'application/json' } }

      const url = `${baseUrl}/users/register`
      const res = await axios.post(
        url,
        { name, email, password, passwordConfirm },
        config
      )

      // console.log('Depois do axios register: ', res)

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      if (completedStatus === 'success') {
        setCompleted(completedMessage)
      }
      setLoading(false)
    } catch (error) {
      const errorStatus = error.response.data.status
      const errorMessage = error.response.data.message

      if (errorStatus === 'fail') {
        setProblem(errorMessage)
      }
      setLoading(false)

      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.log('Entrou no catch - Caso 1 : error.response out of 200 range')
      //   console.log(error.response.data.message)
      //   console.log(error.response.status)
      //   setLoading(false)
      //   setError(error.response.data.message)
      // } else if (error.request) {
      //   console.log('Entrou no catch - Caso 2 : The request was made but no response was received')
      //   // The request was made but no response was received
      //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //   // http.ClientRequest in node.js
      //   console.log(error.request)
      // } else {
      //   console.log('Entrou no catch - Caso 3 : Something happened in setting up the request')
      //   // Something happened in setting up the request that triggered an Error
      //   console.log('Error', error.message)
      // }
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    // console.log(name, email, password, passwordConfirm)
    registerUserScreen(name, email, password, passwordConfirm)
  }

  return (
    <div style={{ backgroundColor: '#eaeded', marginRight: '10px' }}>
      <div
        style={{
          margin: 'auto',
          width: '25%',
          minWidth: '340px',
          minHeight: '87vh',
          display: 'block',
          textAlign: 'center'
        }}
      >
        <br />
        <h3 className="mb-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
          Crie sua conta
        </h3>
        {completed && <Message>{completed}</Message>}
        {problem && <Message variant="danger">{problem}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler} className="mb-4 mx-auto">
          <InputGroup className="my-4" controlid="email">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Icon.Person />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              autoFocus
              className="form-control"
              id="name"
              name="name"
              type="text"
              value={name}
              placeholder="Nome de usuário com 20 letras"
              maxLength="25"
              size="lg"
              inputMode="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="my-4" controlid="email">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Icon.Envelope />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Endereço de email"
              maxLength="60"
              size="lg"
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
              placeholder="Senha (6 a 20 caracteres)"
              maxLength="20"
              minLength="6"
              size="lg"
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
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              value={passwordConfirm}
              placeholder="Confirme a senha (6 a 20 caracteres)"
              maxLength="20"
              minLength="6"
              size="lg"
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
            disabled={!validateForm() || completed}
          >
            Entrar
          </Button>
        </Form>

        {completed && (
          <div style={{ fontSize: '22px', color: 'black', marginTop: '5vh' }}>
            <div className="my-4 text-center">
              Verifique a sua caixa de email !
            </div>
          </div>
        )}

        <br />
        <div style={{ color: 'white' }}>
          <div className="my-2 text-center btn btn-outline-primary">
            <Link
              to="/login"
              style={{ color: 'darkblue', textDecoration: 'none' }}
            >
              Já tenho conta!
            </Link>
          </div>
        </div>

        <br />
        <div style={{ color: 'white' }}>
          <div className="my-2 text-center btn btn-info">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal
            </Link>
          </div>
        </div>

        <br />
        <div>
          <div className="text-center">
            <Link to="">Termos de Uso</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="">Privacidade dos Dados</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
