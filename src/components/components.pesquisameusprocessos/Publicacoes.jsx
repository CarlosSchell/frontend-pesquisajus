
import Publicacao from './Publicacao.jsx'

//<Publicacoes publicacoes={publicacoes} textToHighlight={""} incluiProcessoLista={incluiProcessoLista}/>

const Publicacoes = ({ publicacoes, textToHighlight, incluiProcessoLista}) => {
  return (
    <>
      {publicacoes.map((publicacao, index) => (
        <Publicacao key={index} publicacao={publicacao} textToHighlight={textToHighlight} incluiProcessoLista={incluiProcessoLista} />
      ))}
    </>
  )
}

export default Publicacoes