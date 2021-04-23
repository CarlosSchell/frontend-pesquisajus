import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

const UserProfile = () => {
  const { userLogin } = useSelector((state) => state)

  return (
    <div style={{ backgroundColor: '#eaeded' }}>
        <Container>
            <br></br>
            <div className="text-center py-3 mt-3">
                <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Perfil do usuário</h3>

                <div  style={{ fontSize: '24px', textAlign: 'center' }}>

                    <br></br>
                    <h5><strong>Nome : </strong>{userLogin.name}</h5>
                    <h5><strong>Email : </strong>{userLogin.email}</h5>
                    <h5><strong>Tipo : </strong>{userLogin.role}</h5>
                    <div style={{wordWrap: 'break-word' }}>
                        <h5><strong>Token : </strong></h5>
                        <p><span style={{ fontSize: '16px' }}>{userLogin.token}</span></p>
                    </div>

                    <br></br>
                    <br></br>

                    <div style={{ color: 'white'}}>
                        <div className="my-4 text-center btn btn-info">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Voltar à página principal
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
            </div>
        </Container>
    </div>

  )
}

export default UserProfile
