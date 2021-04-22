import * as Icon from 'react-bootstrap-icons'
import ButtonWhatsapp from '../ButtonWhatsapp.jsx'

const Processo = ({ processo, onDelete, onToggle }) => {

  // WhatsApp Data
  const cellNumber = '51991068021' // futuramente colocar o numero do advogado / cliente / indicado
  const texto = processo.descricao

  return (
    <div>
      <div style={{ fontSize: '1.1rem', marginLeft: '12px', marginBottom: '0px' }}>
        <p style={{ marginBottom: '0px', color: 'black' }}>
          <Icon.Trash
            style={{ marginBottom: '0px' }}
            onClick={() => {
              onDelete({ processo: processo.processo, descricao: processo.descricao })
            }}
          />
          {'    '}
          {processo.descricao}
          &nbsp;
          <span style={{ padding: '10px'}}>
                <ButtonWhatsapp cellNumber={cellNumber} texto={texto} size={20}/>
            </span>

        </p>

        <p style={{ marginBottom: '3px' }}>
          {processo.processo}
          {'    '}
          <Icon.ArrowDown />
          <Icon.ArrowUp />
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Processo
