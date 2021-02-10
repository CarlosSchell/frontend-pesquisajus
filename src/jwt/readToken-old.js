import jwt from 'jsonwebtoken'

// function autenticaToken(req, res, next) - vai no middleware

// ver o authserver no Kile Web Dev simplfied - youtube refresh tokens
// https://www.youtube.com/watch?v=mbsmsi7l3r4&feature=youtu.be
// criar uuid no arquivo de publicacçoes e de usuário
// ver o vídeo do Dev ED
// https://www.youtube.com/watch?v=2jqok-WgelI
// https://www.youtube.com/watch?v=gnkrDse9QKc

const readToken = (token) => {
  const privateKey =
    '4c73f2902d59edd0b5520f8e4784c193e6e475f178974aa618c9fab461185ebc73693391a4fd31da6705126e3acf7ccf4a14c486dcd346ccfbc71c220d7e41bd'
  const options = { algorithm: 'HS256' }
  try {
    const user = jwt.verify(token, privateKey, options)
    // console.log('Sucesso !')
    return user
  } catch {
    // console.log('ocorreu um erro !!!!!!!')
    return {}
  }
}

export default readToken

// console.log(token)
// console.log(user)
