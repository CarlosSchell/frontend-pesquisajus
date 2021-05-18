import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import axios from 'axios'

import Message from '../components/Message'
import Loader from '../components/Loader'
import ReactConfig from '../utils/ReactConfig'

const Contato = () => {
    // eslint-disable-next-line no-console
    console.log('Entrou no Contato')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState('')
    const [problem, setProblem] = useState('')
    const baseUrl = ReactConfig.baseUrl ?? ''
    const validateForm = () => email.length > 0

    const submitHandler = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const config = { headers: { 'Content-Type': 'application/json' } }
            const url = `${baseUrl}/geral/enviaemail`
            const res = await axios.post(url, { name, email, message }, config)

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
            if (errorStatus === 'fail') {
                setProblem(errorMessage)
                setCompleted('')
            }
        }
        setLoading(false)
    }

    return (
        <div className="body">
            <div className="innerbody" style={{ textAlign: 'left' }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Envie sua mensagem
                </h3>

                {completed && <Message variant="success">{completed}</Message>}
                {problem && <Message variant="danger">{problem}</Message>}

                {loading && <Loader className="text-center" />}

                <Form onSubmit={submitHandler} className="mt-2 mx-auto">
                    <Form.Label className="my-0">Nome</Form.Label>
                    <InputGroup className="mb-2" controlid="name">
                        <FormControl
                            autoFocus
                            className="form-control"
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="Digite seu nome"
                            maxLength="50"
                            size="lg"
                            inputMode="text"
                            required
                            onChange={(e) => setName(e.target.value)}
                            style={{ fontSize: '20px' }}
                        />
                    </InputGroup>
                    <Form.Label className="my-0">Endereço de email</Form.Label>
                    <InputGroup className="mb-2" controlid="email">
                        <FormControl
                            className="form-control"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="Digite seu endereço de email"
                            maxLength="60"
                            size="lg"
                            inputMode="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>
                    <Form.Label className="my-0">Mensagem</Form.Label>
                    <Form.Group className="mb-2" controlId="textarea">
                        <Form.Control
                            as="textarea"
                            name="textarea"
                            type="textarea"
                            rows={5}
                            value={message}
                            placeholder="Digite sua mensagem"
                            maxLength="1024"
                            size="lg"
                            required
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Form.Group>

                    <div style={{ textAlign: 'center' }}>
                        <Button
                            className="mt-2"
                            name="commit"
                            variant="primary"
                            type="submit"
                            size="lg"
                            block
                            value="Enviar mensagem"
                            disabled={!validateForm() || completed}>
                            Enviar mensagem
                        </Button>
                    </div>
                </Form>
                <br />
                <br />
                <br />

                <div className="text-center" style={{ color: 'black' }}>
                    <Link to="/" >
                        <Button variant="secondary">
                            Voltar à página principal
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contato
