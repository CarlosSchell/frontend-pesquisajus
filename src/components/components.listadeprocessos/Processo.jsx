import * as Icon from 'react-bootstrap-icons'

const Processo = ({ processo, onDelete, onToggle }) => {
  return (
    <div style={{ fontSize: '1.1rem', marginLeft: '12px' }}>
      <p style={{ marginBottom: '0px' , color: "black"}}>
        <Icon.Trash style={{ marginBottom: '0px' }} />
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
  )
}

export default Processo
