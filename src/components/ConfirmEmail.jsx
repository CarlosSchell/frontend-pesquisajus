import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import Message from './Message'
import Loader from './Loader.jsx'
import decodeUserToken from'../utils/decodeUserToken'
import ReactConfig from '../utils/ReactConfig'

// Acessado via http://localhost:3000/confirmemail/eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9...

// http://localhost:21115/v1/users/confirmemail/eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcmxvcy5zY2hlbGxlbmJlcmdlckBnbWFpbC5jb20iLCJpYXQiOjE2MTM5NDM4NzMsImV4cCI6MTYxNDAzMDI3M30.RuZj_OUtKvrtHJUFqlza6WB7__1I7M5EmbmdoPcO_7NBS7Sbeh_JJYtsaIBGtOgMronyRg91RtlIO2dstaNwj6zyb_6l6NMJ8l7bWRjfRBfyklB9icCsyGKJkG5gb4k9X-UNXy7Du-21KEhFf7Fphfr4PXCEgCuoG_cU0s54KbCRSk5Psquu5i0Jeis03TtPNIDLODLmCpR7Ifjo3PElWdeh1BqDVBg57x8C9vdryaoFw_wSRWyx-KSPVub9IqTgwfuNREK_uJauSrBJt00tV0LvyZ6RV1KFpcE8qoXGOpzT9e14XKtpIO4csiRPiY76RusoHESXKpqGr9Y3h1fFEA

const ConfirmEmail = ({ match, location, history }) => {
  console.log('Entrou no confirm Email - externo!')

  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState('')
  const [problem, setProblem] = useState('')

  const baseUrl = ReactConfig.baseUrl ?? ''

  const token = match.params.token

  console.log('token do confirm email: ', token)

  const decoded = decodeUserToken(token) //Synchronous
  const email = decoded.email ?? ''

  // let messageTimer = () => {}

  // if (completed) {
  //   messageTimer = setTimeout(() => {
  //     history.push('/login')
  //   }, 4000)
  // }

  // if (problem) {
  //   messageTimer = setTimeout(() => {
  //     setProblem('')
  //   }, 2500)
  // }

  // useEffect(() => {
  //   console.log('UseEffect Confirm Email!')
  //   return () => {
  //     clearTimeout(messageTimer)
  //   }
  // }, [])

  const ConfirmEmailInternal = async () => {
    try {
      setLoading(true)
      
      // console.log('Token antes do axios : ', token)
      // console.log('Email antes do axios : ', email)

      const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
      const url = baseUrl + '/users/confirmemail' 
      const isConfirmed = true
      const res = await axios.post(url, { isConfirmed }, config)

      const completedStatus = res.data.status ?? ''
      const completedMessage = res.data.message ?? ''

      console.log('axios res : ', res )
      console.log('completed : ', completedMessage )
      console.log('status : ', completedStatus )

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
    ConfirmEmailInternal()
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
      <h2 className="mb-3" style={{ textShadow: '2px 2px 2px lightgrey' }}>
        Confime o email 
      </h2>
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
            size="50"
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
        <div className="my-4 text-center btn btn-info">
          {!completed ? (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Voltar à página principal 
            </Link>
          ) : (
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Entrar no pesquisajus (Login)
            </Link>
          )}

        </div>
      </div>

    </Container>
  )
}

export default ConfirmEmail
