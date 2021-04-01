import * as Icon from 'react-bootstrap-icons'

const Processo = ({ processo, onDelete, onToggle }) => {
  return (
    <div>
      <div style={{ fontSize: '1.1rem', marginLeft: '12px' }}>
        <p style={{ marginBottom: '0px', color: 'black' }}>
          <Icon.Trash
            style={{ marginBottom: '0px' }}
            onClick={() => {
              onDelete({ processo: processo.processo, descricao: processo.descricao })
            }}
          />
          {'    '}
          {processo.descricao}
        </p>

        <p style={{ marginBottom: '3px' }}>
          {processo.processo}
          {'    '}
          <Icon.ArrowDown />
          <Icon.ArrowUp />
        </p>
      </div>
    </div>
  )
}

export default Processo
