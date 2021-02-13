import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day })

    setText('')
    setDay('')
  }

  return (
    <Form style={{minWidth:"250px"}}>
      <Form.Group controlId="formNroProcesso">
        <Form.Label>Numero do Processo (CNJ)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Numero CNJ completo: 1234567-00.1234.8.21-1234"
          value={text}
          autofocus
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescricaoProcesso">
        <Form.Label>Descrição:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Texto curto identificador do processo"
          maxLength="45"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </Form.Group>

        <Button type="submit" Incluir Processo className="lg btn-block">
          Incluir Processo
        </Button>

    </Form>
  )
}

export default AddTask
