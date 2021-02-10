import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../components/Message'
import Loader from '../components/Loader'

const RegisterScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const redirect = location.search ? location.search.split('=')[1] : '/register'
  // const redirect = '/'

  useEffect(() => {
    // if (userInfo) {
    //   history.push(redirect)
    // }
    const messageTimer = setTimeout(() => {
      setError(false)
    }, 2500)
    return () => clearTimeout(messageTimer)
  }, [error, history, redirect])

  // Page Actions
  const validateForm = () => {
    return email.length > 0 && password.length > 5 && password.length <= 20 && (password===passwordConfirm)
  }

  const registerUser = async (name, email, password, passwordConfirm) => {
    try {
      console.log('Entrou no try - Antes do axios register')
      setLoading(true)
      // const config = { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+token } }
      const config = { headers: { 'Content-Type': 'application/json' } }
      const res = await axios.post(
        'https://cryptic-falls-65427.herokuapp.com/api/v1/users/register',
        { name, email, password, passwordConfirm },
        config
      )
      console.log('Depois do axios register: ', res)
      // setUserInfo({res})
      setLoading(false)
      setError(false)
      // Grava o Token em um cookie local storage (http Only - Usar Set Cookies !!!)
      const tokenTemp = JSON.stringify(res.data.token)
      console.log('Token', tokenTemp)
      localStorage.setItem('jwt-pj', tokenTemp)
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

  const handleSubmit = (event) => {
    event.preventDefault()
    // Make the database request
    console.log(email, password, passwordConfirm)
    const name='default'
    registerUser(name, email, password, passwordConfirm)
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
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
      <h2 className="mb-3" style={{textShadow: '2px 2px 2px lightgrey',}} >
        Crie sua conta
      </h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={handleSubmit} className="mb-4 mx-auto">
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
            placeholder="Confirme sua senha (6 a 20 caracteres)"
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
          Entrar
        </Button>
      </Form>

      <div>
        <div className="my-2">
          <div>
            <ul style={{ listStyle: 'none' }} className="mb-4">
              <li>
                <Link to="https://heroku.com/policy/tos">Termos de Uso</Link>
              </li>
              <li>
                <Link to="https://www.salesforce.com/company/privacy">Privacidade dos Dados</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default RegisterScreen
