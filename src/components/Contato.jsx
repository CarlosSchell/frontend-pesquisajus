import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader.jsx'
import ReactConfig from '../utils/ReactConfig.js'


const Contato = () => {
  console.log('Entrou no Contato')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  const baseUrl = ReactConfig.baseUrl ?? ''

  const validateForm = () => {
    return email.length > 0 
  }
  
  const submitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)
    console.log('Enviando mensagem de contato')
    console.log(name, email, message)
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const url = baseUrl + '/geral/enviaemail'
      const res = await axios.post(url, { name, email, message }, config)
      console.log('Depois do axios da mensagem de contato: ', res)

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      if (completedStatus === 'success') {
        setCompleted(completedMessage)
      }
      setLoading(false)
    } catch (error) {
      console.log('Entrou no catch register error')
      console.log('Resposta de erro: ', error.response)

      const errorStatus = error.response.data.status
      const errorMessage = error.response.data.message

      console.log('Erro.response.status : ', errorStatus) //401
      console.log('Erro.response.message : ', errorMessage)
      // console.log('Erro.response.data.error : ', error.response.data.error)

      if (errorStatus === 'fail') {
        setProblem(errorMessage)
      }
    }
    setLoading(false)
    return
  }

  return (
    <Container
      style={{
        width: '820px',
        minwidth: '540px',
        height: '67vh',
        display: 'block',
        textAlign: 'left',

      }}
    >
      <h3 className="py-3 mt-3 mb-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
        Entre em contato conosco
      </h3>
      {completed && <Message>{completed}</Message>}
      {problem && <Message variant="danger">{problem}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} className="mb-4 mx-auto">
        <Form.Label>Nome</Form.Label>
        <InputGroup className="my-1" controlid="name">
          <FormControl
            autoFocus={true}
            className="form-control"
            id="name"
            name="name"
            type="text"
            value={name}
            placeholder="Digite seu nome"
            maxLength="50"
            size="50"
            inputMode="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>
        <Form.Label>Endereço de email</Form.Label>
        <InputGroup className="my-1" controlid="email">
          <FormControl
            className="form-control"
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Digite seu endereço de email"
            maxLength="60"
            size="60"
            inputMode="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <Form.Label>Mensagem</Form.Label>
        <Form.Group className="my-1"  controlId="exampleForm.ControlTextarea1">    
            <Form.Control 
            as="textarea" 
            id="textarea"
            name="textarea"
            type="textarea"
            rows={5}
            value={message}
            placeholder="Digite sua mensagem"
            maxlength = '1024'
            required
            onChange={(e) => setMessage(e.target.value)}
            />
        </Form.Group>

        <Button
          className="btn btn-block mt-2"
          name="commit"
          variant="primary"
          type="submit"
          value="Entrar"
          disabled={!validateForm() || completed}
        >
          Enviar mensagem
        </Button>
      </Form>

      <div className="text-center" style={{ color: 'white', marginTop: '10vh'}}>
        <div className="my-4 btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>

    </Container>
  )
}

export default Contato
