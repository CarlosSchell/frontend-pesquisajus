import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddProcesso = ({ onAdd }) => {
  const [nroProcesso, setNroProcesso] = useState('')
  const [descricaoProcesso, setDescricaoProcesso] = useState('')

  console.log('Passou pelo Add Processo')

  // // Add Task
  // const addTask = async (task) => {
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(task),
  //   })

  //   const data = await res.json()

  //   setTasks([...tasks, data])

  //   // const id = Math.floor(Math.random() * 10000) + 1
  //   // const newTask = { id, ...task }
  //   // setTasks([...tasks, newTask])
  // }

  const validateProcesso = (nroProcesso) => {

    console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)

    if (!nroProcesso) return false
    
    if (nroProcesso.length === 25) {
      return true
    } else {
      return false
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(nroProcesso, descricaoProcesso)

    onAdd({ processo: nroProcesso, descricao: descricaoProcesso })

    setNroProcesso('')
    setDescricaoProcesso('')
  }

  return (
    <Form style={{ minWidth: '250px', color: 'black', fontWeight: '500' }} onSubmit={onSubmit}>
      <Form.Group controlId="formNroProcesso">
        <Form.Label >Número do Processo (CNJ)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Exemplo: 1234567-00.1234.8.21-1234"
          value={nroProcesso}
          autoFocus
          required
          onChange={(e) => setNroProcesso(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescricaoProcesso">
        <Form.Label>Descrição:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Texto curto identificador do processo"
          maxLength="45"
          value={descricaoProcesso}
          required
          onChange={(e) => setDescricaoProcesso(e.target.value)}
        />
      </Form.Group>

      <Button
          className="btn btn-block mt-2"
          name="commit"
          variant="primary"
          type="submit"
          value="Entrar"
          disabled={!validateProcesso(nroProcesso)}
        >
          Incluir Processo
        </Button>

      <input type='submit' value='Incluir Processo' className='lg btn btn-block mt-2' />

    </Form>
  )
}

export default AddProcesso
