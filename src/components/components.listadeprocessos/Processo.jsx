import { FaTimes } from 'react-icons/fa'

const Processo = ({ processo, onDelete, onToggle }) => {
  return (
    <div>
      <h3>
        {processo.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(processo.id)}
        />
      </h3>
      <p>{processo.day}</p>
    </div>
  )
}

export default Processo