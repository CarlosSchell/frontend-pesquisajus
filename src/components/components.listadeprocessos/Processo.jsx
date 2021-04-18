import * as Icon from 'react-bootstrap-icons'
import ButtonWhatsapp from '../ButtonWhatsapp.jsx'


const Processo = ({ processo, onDelete, onToggle }) => {

  const cellNumber =  "51991068021"

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
          <ButtonWhatsapp cellNumber={cellNumber} processo={processo}/>
          
        </p>

        <p style={{ marginBottom: '3px' }}>
          {processo.processo}
          {'    '}
          <Icon.ArrowDown />
          <Icon.ArrowUp />
        </p>
      </div>
      <hr/>
    </div>
  )
}

export default Processo
