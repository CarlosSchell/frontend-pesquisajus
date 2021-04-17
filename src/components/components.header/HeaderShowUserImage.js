

const HeaderShowUserImage = (props) => {
  const  randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const zerosEsquerda = (numero) => {
    //console.log('numero ', numero)
    let numeroString = numero.toString()
    //console.log('numerotoString ', numeroString)
    if (numero === 0) {
      numeroString = '000'
    } else if (numero < 10) {
      numeroString = "00" + numeroString
    } else if (numero >= 10 & numero < 100) {
        numeroString = "0" + numeroString
    } 
    return numeroString
  }

  const avatarType = '4'
  const avatarNumber = randomIntFromInterval(0, 999)
  const avatarNumberString = zerosEsquerda(avatarNumber)
  const avatar = '/public/avatar/avatar' + avatarType + avatarNumberString + '.png'
  const altAvatarImage = 'User image'

  return (
    <div>
      <img
        className="ml-4 roundedCircle img-fluid"
        src={avatar}
        alt={altAvatarImage}
        width="50px"
        height="50px"
      />
    </div>
  )
}

export default HeaderShowUserImage
