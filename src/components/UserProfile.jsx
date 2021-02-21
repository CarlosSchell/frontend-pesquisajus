import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const { userLogin } = useSelector((state) => state)

  return (
    <div className="my-4 text-center">
      <h2>Perfil do usuário</h2>
      <br></br>
      <h5>Nome : {userLogin.name}</h5>
      <h5>Email : {userLogin.email}</h5>
      <h5>Tipo : {userLogin.role}</h5>
      <h5>Token : {userLogin.token}</h5>

      <div style={{ color: 'white', marginTop: '40vh' }}>
        <div className="my-4 text-center btn btn-info">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Voltar à página principal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
