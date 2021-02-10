import createToken from '../jwt/createToken'
import readToken from '../jwt/readToken'

const TestaToken = () => {
  const user = {
    name: 'Bob Woodward',
    email: 'woodward@uol.com.br',
    role: 'admin',
  }

  let resultadoToken = createToken(user)
  // let resultadoToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmVuYXRhIENsYWlyIiwiZW1haWwiOiJtYXJpc2FAdW9sLmNvbS5iciIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTYxMDU3ODcwMCwiZXhwIjoxNjEwNTc4NzE1fQ.YDtGR31iUF6is1Kt3FtB6PDw7tXVjFR1SDNSZTvAQME'

  let verificaToken = readToken(resultadoToken)

  return (
    <>
      <p>{resultadoToken}</p>
      <p>================</p>
      <p>{verificaToken.name}</p>
      <p>{verificaToken.email}</p>
      <p>{verificaToken.role}</p>
    </>
  )
}

export default TestaToken
