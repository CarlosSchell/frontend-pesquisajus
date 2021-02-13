// programa auxiliar - fala do refresh token

require('dotenv').config()
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

let refreshTokens = []
//refreshTokens.push(refreshToken)
//refreshTokens = refreshToken.filter(token => token !== req.body.token)

app.post('/logout', (req, res) => {
    // Authenticate the user
    refreshTokens = refreshToken.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

app.post('/token', (req, res) => {
    // Authenticate the user
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshToken.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = generateAccessToken({ name: user.name })
        res.json({ accessToken: accessToken })
    })
})

app.post('/login', (req, res) => {
    // Authenticate the user
    const username = req.body.username
    console.log(username) //
    const user = { name: username}

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)
    res.json({ accessToken: accessToken, refreshToken: refreshToken})

    // Para gerar ACCESS_TOKEN_SECRET / REFRESH_TOKEN_SECRET: (grava no arquiv .env)
    // Open new terminal:
    // node
    // require('crypto').randomBytes(64).toString('hex')
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s'})
}

const port = 4000
app.listen(port, () => {
    console.log(`AuthServer listening at http://localhost:${port}`)
})