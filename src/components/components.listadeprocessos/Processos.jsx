import Processo from './Processo'

const Processos = ({ processos, onDelete, onToggle }) => {
  return (
    <>
      {processos.map((processo, index) => (
        <Processo key={index} processo={processo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Processos