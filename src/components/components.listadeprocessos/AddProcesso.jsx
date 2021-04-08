import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import verificaZerosEsquerda from '../../utils/verificaZerosEsquerda'

const AddProcesso = ({ gravaNovoProcesso }) => {
  const [nroProcesso, setNroProcesso] = useState('')
  const [descricaoProcesso, setDescricaoProcesso] = useState('')
  const [isNroProcessoValido, setIsNroProcessoValido] = useState(false)

  console.log('Passou pelo AddProcesso - Pega o codigo do novo processo')

  const validateProcesso = (nroProcesso) => {
    console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)
    nroProcesso = verificaZerosEsquerda(nroProcesso)
    setNroProcesso(nroProcesso)
    let isValid = false
    if (nroProcesso.length === 25) {
      isValid = true
    } 
    setIsNroProcessoValido(isValid)
    return
  }


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Pega o codigo do novo processo OnSubmit :', nroProcesso, descricaoProcesso)
    gravaNovoProcesso({ processo: nroProcesso, descricao: descricaoProcesso })
    setIsNroProcessoValido(false)
    setNroProcesso('')
    setDescricaoProcesso('')
  }

  return (
    <Form style={{ minWidth: '250px', color: 'black', fontWeight: '500' }} onSubmit={onSubmit}>
      <Form.Group controlId="formNroProcesso">
        <Form.Label >Número do Processo (CNJ)</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={nroProcesso}
          autoFocus
          required
          maxLength="25"
          minLength="25"
          pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'
          onChange={(e) => validateProcesso(e.target.value)}
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
          disabled={(!isNroProcessoValido)}
        >
          Incluir Processo
        </Button>

    </Form>
  )
}

export default AddProcesso
