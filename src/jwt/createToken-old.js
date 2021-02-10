import jwt from 'jsonwebtoken'
import fs from 'fs'

const createToken =  (user) => {
  // Asynchronous Sign with RSA SHA256
  const privateKey = fs.readFileSync('private.key')
  const privateKeypath = 'C:/Users/Carlos/Desktop/PlayCode/my-app/src/jwt/private.key'
  const privateKey = fs.readFileSync(privateKeypath)
  const privateKey =
    '4c73f2902d59edd0b5520f8e4784c193e6e475f178974aa618c9fab461185ebc73693391a4fd31da6705126e3acf7ccf4a14c486dcd346ccfbc71c220d7e41bd'

  const options = {
    algorithm: 'RS512',
    expiresIn: 15,
  }

  const data = {
    name: user.name,
    email: user.email,
    role: user.role,
  }

  let token = ''
  token = jwt.sign(data, privateKey, options)

  return token
}

export default createToken

// Gerar HSA Key : require('crypto').randomBytes(64).toString('hex')
// Enviar resposta :
// res.json({ accessToken: accessToken, refreshToken: refreshToken})
// Resposta
// {
//   "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...kJxW2bDb8CbxTu3d6L",
//   "expires_in": 315619200,
//   "refresh_token": "def50200ccdded4cea6791...5c98d151b15fa86384",
//   "token_type": "Bearer"
// }

// Error Message
// {
//   "error": "Unauthenticated"
// }

// ACCESS_TOKEN_SECRET=4c73f2902d59edd0b5520f8e4784c193e6e475f178974aa618c9fab461185ebc73693391a4fd31da6705126e3acf7ccf4a14c486dcd346ccfbc71c220d7e41bd
// REFRESH_TOKEN_SECRET=338402deedf31c703bbb6ce7703c6d5f07a033ede2c80f939c0dbe8ce9ff74955fff321e031d31b6c04975c70900615b6ee0459805e33d8b5ff1dffa1ea7cd3d

// Backdate: 30 segundor
// iat: Math.floor(Date.now() / 1000) - 30

// jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//   if (err) return res.sendStatus(403)
//   const accessToken = generateAccessToken({ name: user.name })
//   res.json({ accessToken: accessToken })
// })

// const accessToken = generateAccessToken(user)
// const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
// refreshTokens.push(refreshToken)
// res.json({ accessToken: accessToken, refreshToken: refreshToken })

// https://api.escavador.com/docs/

//const ACCESS_TOKEN_SECRET =
//  '4c73f2902d59edd0b5520f8e4784c193e6e475f178974aa618c9fab461185ebc73693391a4fd31da6705126e3acf7ccf4a14c486dcd346ccfbc71c220d7e41bd'
// const REFRESH_TOKEN_SECRET =
// '338402deedf31c703bbb6ce7703c6d5f07a033ede2c80f939c0dbe8ce9ff74955fff321e031d31b6c04975c70900615b6ee0459805e33d8b5ff1dffa1ea7cd3d'
// RSA_PUBLIC_KEY='-----BEGIN PUBLIC KEY-----
// MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H
// 4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t
// 0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4
// ehde/zUxo6UvS7UrBQIDAQAB
// ----- END PUBLIC KEY-----'

  // "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...kJxW2bDb8CbxTu3d6L",
  // "expires_in": 315619200,
  // "refresh_token": "def50200ccdded4cea6791...5c98d151b15fa86384",
  // "token_type": "Bearer"
