import { Link } from 'react-router-dom'

const PageNotFound = () => {
	return (
		<div className="text-center mt-5">
			<h2 className="text-center mt-5">
				Página não encontrada
			</h2>
			<div style={{ color: 'white', marginTop: '10vh' }}>
				<div className="my-4 text-center btn btn-info">
					<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
						Voltar à página principal
					</Link>
				</div>
			</div> 
		</div>
	)
}

export default PageNotFound
