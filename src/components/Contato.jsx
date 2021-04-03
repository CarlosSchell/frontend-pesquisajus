import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'


const Contato = () => {
  console.log('Entrou no Contato')
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)

    // post email
    console.log(loading)

    setLoading(false)
    return
  }

  return (
    <div className="my-4 text-center">
      <h3> Entre em contato conosco:</h3>
      <Form onSubmit={handleSubmit} method="POST">
            <div>
            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            </div>
            <button type="submit">Enviar</button>
        </Form> 


      <div style={{ color: 'white', marginTop: '40vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contato
