import { Link } from 'react-router-dom'

const Downloads = () => {
  console.log('Passou pelo Downloads')
  return (
    <div className="text-center py-3 mt-3">
      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Edições do Diário Oficial - TJRS - para download</h3>
      <br></br>

      <div style={{ color: 'white', marginTop: '65vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Downloads
