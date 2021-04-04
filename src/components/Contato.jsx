import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message'
import ReactConfig from '../utils/ReactConfig.js'


const Contato = () => {
  console.log('Entrou no Contato')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  let completed = false
  let problem = false
  let Message = ''

  const validateForm = () => {
    return email.length > 0 
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    setLoading(true)
    console.log('Enviando mensagem de contato')
    console.log(name, email, message)
    // sendContatoMessage(name, email, message)
    setLoading(false)
    return
  }

  return (
    <Container
      style={{
        width: '420px',
        height: '67vh',
        display: 'block',
        textAlign: 'center',
        marginTop: '3%',
      }}
    >
      <h2 className="mb-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Entre em contato conosco
      </h2>
      {/* {completed && <Message>{completed}</Message>}
      {problem && <Message variant="danger">{problem}</Message>} */}
      {loading && <Loader />}

      <Form onSubmit={submitHandler} className="mb-4 mx-auto">
        <InputGroup className="my-4" controlid="email">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <Icon.Person />
            </InputGroup.Text>
          </InputGroup.Prepend>
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
            placeholder="Digite seu endereço de email"
            maxLength="60"
            size="60"
            inputMode="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <Form.Group className="my-4"  controlId="exampleForm.ControlTextarea1">
            <Form.Control 
            as="textarea" 
            id="textarea"
            name="textarea"
            type="textarea"
            rows={4}
            value={message}
            placeholder="Digite sua mensagem"
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

      {completed && (
          <div style={{ fontSize: '2rem', color: 'black', marginTop: '5vh' }}>
            <div className="my-4 text-center">Mensagem enviada !</div>
          </div>
        )}

      <div style={{ color: 'white', marginTop: '3vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>

    </Container>
  )
}

export default Contato
