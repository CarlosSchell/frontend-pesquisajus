import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const redirect = location.search ? location.search.split('=')[1] : '/'

  // let navigate = useNavigate()

  useEffect(() => {
    // if (userInfo) {
    //   history.push(redirect)
    // }

    // const messageTimer = setTimeout(() => {setError(false)}, 2500)
    // return () => clearTimeout(messageTimer);
  }, [error, history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Novo Usuário: ', email, password)
    dispatch(login(email, password))
    
    setEmail('')
    setPassword('')
    history.push('/')
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
      <h2 className="mb-3" style={{textShadow: '2px 2px 2px lightgrey',}} >
        Entre na sua conta
      </h2>
      {error && <Message variant="danger">{error}</Message>}
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

      <div>
        <div className="mb-3">
          <Link to="/forgetpassword"><strong>Esqueci minha senha</strong></Link>
        </div>

        <div className="py-3">
          <strong>Não possui uma conta?{'  '}</strong> 
          <Link to="/register"><strong>Crie sua Conta Grátis</strong></Link>
        </div>

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

export default LoginScreen