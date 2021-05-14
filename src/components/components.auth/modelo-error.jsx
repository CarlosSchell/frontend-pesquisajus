import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from '../Message'
import Loader from '../Loader'
import decodeUserToken from '../../utils/decodeUserToken'
import ReactConfig from '../../utils/ReactConfig'

const ConfirmEmail = ({ match, history }) => {
    // eslint-disable-next-line no-console
    console.log('Entrou no confirm Email - externo!')

    const [loading, setLoading] = useState(false)
    const [completed, setCompleted] = useState('')
    const [problem, setProblem] = useState('')

    const baseUrl = ReactConfig.baseUrl ?? ''
    const { token } = match.params
    const decoded = decodeUserToken(token) // Synchronous
    // If token is valid
    // if (decoded === '') {
    //   return 'Token Inválido. Acesso negado'
    // }
    const email = decoded.email ?? ''

    let messageTimer = () => {}
    // console.log('Problema : ', problem)
    // console.log('Completed : ', completed)

    if (completed) {
        messageTimer = setTimeout(() => {
            history.push('/login')
        }, 1500)
    }

    if (problem) {
        messageTimer = setTimeout(() => {
            setProblem('')
        }, 2500)
    }

    useEffect(() => clearTimeout(messageTimer), [])

    const ConfirmEmailInternal = async () => {
        try {
            setLoading(true)
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            const url = `${baseUrl}/users/confirmemail`
            const isConfirmed = true
            const res = await axios.post(url, { isConfirmed }, config)

            const completedStatus = res.data.status ?? ''
            const completedMessage = res.data.message ?? ''

            if (completedStatus === 'success') {
                setCompleted(completedMessage)
                setProblem('')
            }
            setLoading(false)
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Resposta : ', error.response)
            const errorStatus = error.response.data.status
            const errorMessage = error.response.data.message
            if (errorStatus !== 'success') { 
                setCompleted('')
                setProblem(errorMessage)
            }
            setLoading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        ConfirmEmailInternal()
    }

    return (
        <div style={{ backgroundColor: '#eaeded', marginRight: '8px' }}>
            <div
                style={{
                    margin: 'auto',
                    width: '25%',
                    minWidth: '340px',
                    minHeight: '88vh',
                    display: 'block',
                    textAlign: 'center',
                }}
            >
                <br />
                <h3
                    className="mb-3"
                    style={{ textShadow: '1px 1px 1px lightgrey' }}
                >
                    Confirme o email
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

                    <Button
                        className="btn btn-block mt-2"
                        name="commit"
                        variant="primary"
                        type="submit"
                        value="Entrar"
                        disabled={completed}
                    >
                        Confirmar
                    </Button>
                </Form>

                <div style={{ color: 'white', marginTop: '10vh' }}>
                    {completed && (
                        <div
                            style={{
                                fontSize: '22px',
                                color: 'black',
                                marginTop: '5vh'
                            }}
                        >
                            <div className="my-4 text-center">
                                Aguarde! Acessando o sistema...
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ color: 'white', marginTop: '10vh' }}>
                    <div className="my-4 text-center btn btn-info">
                        {!completed ? (
                            <Link
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                Voltar à página principal
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

ConfirmEmail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.string
    }).isRequired,

    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default ConfirmEmail
