// import { decodeUserToken } from './decodeUserToken'

export const verifyUserJWT = () => {

  let userInfo
  let userInfoLocalhost = JSON.parse(localStorage.getItem('userInfo'))

 if (!userInfoLocalhost) {
      userInfo = { 
       name : 'Convidado', 
       email:  'convidado@pesquisajus.com.br', 
       role : 'User',
       token: ''
      }
    } else {
      userInfo = userInfoLocalhost
    }

  // console.log(typeof token)

  // if ((token !== 'undefined') && (typeof token !== 'undefined') &&  (token) && (token.length > 3)) {
  //   token = token.replaceAll('"', '')
  //   //console.log('UserInfoLocalStorageToken : ', token)
  //   //console.log('É igual ? ', (userToken === token))
  //   let tokenDecoded = decodeUserToken(token)
  //   //console.log('UserInfoDecoded : ', userInfoDecoded)
  //   userInfo = { 
  //     name : tokenDecoded.email.split("@")[0], 
  //     email: tokenDecoded.email, 
  //     role : tokenDecoded.role,
  //     token,
  //   } 
  // }
  // console.log('UserInfo from verifyUserJWTtoken', userInfo)
  // console.log(userInfo)
  return userInfo 
}