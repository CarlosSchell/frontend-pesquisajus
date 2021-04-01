
import Publicacao from './Publicacao.jsx'

const Publicacoes = ({ publicacoes, onDelete, onToggle }) => {
  return (
    <>
      {publicacoes.map((publicacao, index) => (
        <Publicacao key={index} publicacao={publicacao} />
      ))}
    </>
  )
}

export default Publicacoes