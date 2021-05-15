import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../Message'
import Loader from '../Loader'
import decodeUserToken from '../../utils/decodeUserToken'
import ReactConfig from '../../utils/ReactConfig'
// Acessado via http://localhost:3000/v1/users/changepassword/eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9...

const ChangePassword = ({ match, history }) => {
  // eslint-disable-next-line no-console
  console.log('Entrou no change Password!')
  const { userLogin } = useSelector((state) => state)
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  let email = ''
  let decoded = ''
  let { token } = match.params

  if (token) {
    decoded = decodeUserToken(token) // Synchronous
    email = decoded.email ?? ''
  } else {
    email = userLogin.email ?? 'convidado@exemplo.com.br'
    token = userLogin.token ?? ''
  }
  const baseUrl = ReactConfig.baseUrl ?? ''

  let messageTimer = () => {}
  if (completed) {
    messageTimer = setTimeout(() => {
      history.push('/')
    }, 4000)
  }

  if (problem) {
    messageTimer = setTimeout(() => {
      setProblem('')
    }, 2500)
  }

  useEffect(() => clearTimeout(messageTimer), [])

  const changePasswordExternal = async () => {
    try {
      setLoading(true)
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const url = `${baseUrl}/users/changepassword` // + token
      const res = await axios.post(url, { email, password, passwordConfirm }, config)

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
      if (errorStatus !== 'fail') {
        setProblem(errorMessage)
        setCompleted('')
      }
      setLoading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    changePasswordExternal(email, password, passwordConfirm, token)
  }

  // Page Actions
  const validateForm = () => password === passwordConfirm

  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <div
        style={{
          margin: 'auto',
          width: '25%',
          minWidth: '340px',
          minHeight: '90vh',
          display: 'block',
          textAlign: 'center'
        }}
      >
        <h3 className="my-2" style={{ textShadow: '2px 2px 2px lightgrey' }}>
          Digite sua nova senha
        </h3>

        {completed && <Message>{completed}</Message>}
        {problem && <Message variant="danger">{problem}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler} className="mb-4 mx-auto">
          <InputGroup className="my-2" controlid="email">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Icon.Envelope />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              autoFocus
              className="form-control"
              id="email"
              name="email"
              type="email"
              value={email}
              placeholder="Digite seu endereço de email"
              size="lg"
              maxLength="50"
              inputMode="email"
              required
              disabled
            />
          </InputGroup>

          <InputGroup className="my-2" controlid="password">
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
              size="lg"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>

          <InputGroup className="my-2" controlid="passwordConfirm">
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
              size="lg"
              required
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </InputGroup>

          <Button
            className="btn btn-block mt-4"
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
      </div>
    </div>
  )
}

ChangePassword.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string
  }).isRequired,

  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default ChangePassword
