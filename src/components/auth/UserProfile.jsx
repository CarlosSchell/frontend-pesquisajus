import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const { userLogin } = useSelector((state) => state)
  return (
    <div style={{ backgroundColor: '#eaeded' }}>
      <div
        style={{
          margin: 'auto',
          width: '30%',
          minWidth: '320px',
          minHeight: '90vh',
          display: 'block',
          textAlign: 'center'
        }}
      >
        <h3 className="mt-3" style={{ textShadow: '1px 1px 1px lightgrey' }}>
          Perfil do usuário
        </h3>

        <div style={{ fontSize: '24px', textAlign: 'center' }}>
          <h5>
            <strong>Nome : </strong>
            {userLogin.name}
          </h5>
          <h5>
            <strong>Email : </strong>
            {userLogin.email}
          </h5>
          <h5>
            <strong>Tipo : </strong>
            {userLogin.role}
          </h5>
          <div style={{ wordWrap: 'break-word' }}>
            <h5>
              <strong>Token : </strong>
            </h5>
            <p>
              <span style={{ fontSize: '16px' }}>{userLogin.token}</span>
            </p>
          </div>

          <br />


          <div style={{ color: 'white' }}>
            <div className="my-4 text-center btn btn-info">
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none'
                }}
              >
                Voltar à página principal
              </Link>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default UserProfile
