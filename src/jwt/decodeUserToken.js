import jwt from 'jsonwebtoken'

export const decodeUserToken = (token) => {
    if (token === null) return null  // Unauthorized

    // console.log('Token dentro do authenticate : ', token)

    const publicKey = '-----BEGIN PUBLIC KEY-----\n'+
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArDSpn5yMf+L+AZcmbG90\n'+
    '45eoyNMVX0rogpDxSY9WePD9k4swvt7XIYVr7ECz7fkk7fzZLNIOjCCZi8Mv+0Gh\n'+
    'jVoaBhwQlMFAaUDV0drUKdBR/rnNctmJ7rKSYkc5+8VQGMDTwlvld0Zm76DJOvWA\n'+
    'UOlDCkzodUZa0v6zwSV750daP6zRgnLcE5Q1rpUIlbAsCDzf+xK/MFp9aCnuEWg3\n'+
    'S8nu9ImkPUWVoezQgP7lWTUq9emmf9Nx9HaTk7TFAjQvqHshkUCMUctH2ObCAllB\n'+
    '+5OUvFwLfb2rA5YdQV/rmwTcyDs0CAAC+/WyaxRRugsSbWIRCmrEAoT6XDipt0XK\n'+
    'EwIDAQAB\n'+
    '-----END PUBLIC KEY-----'

    //console.log('Public Key dentro do authenticate : ', publicKey)
    let decoded 
    try {
        decoded = jwt.verify(token, publicKey, {algorithm: 'RS512'})
    } catch (error) {
        console.log('Erro na decodificação do token do usuário', error.message)
    }
    // console.log('Decoded : ', decoded)

    return decoded
}