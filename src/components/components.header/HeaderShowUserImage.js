const HeaderShowUserImage = (props) => {
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const zerosEsquerda = (numero) => {
    //console.log('numero ', numero)
    let numeroString = numero.toString()
    //console.log('numerotoString ', numeroString)
    if (numero === 0) {
      numeroString = '000'
    } else if (numero < 10) {
      numeroString = '00' + numeroString
    } else if ((numero >= 10) & (numero < 100)) {
      numeroString = '0' + numeroString
    }
    return numeroString
  }

  // const avatar = `.${process.env.PUBLIC_URL}/avatar/${avatarType}${avatarNumberString}.png`

  const avatarType = '4'
  const avatarNumber = randomIntFromInterval(0, 999)
  const avatarNumberString = zerosEsquerda(avatarNumber)

  const altAvatarImage = 'User image'

  const avatar = 'https://www.pesquisajus.com/public/avatar/avatar' + avatarType + avatarNumberString + '.png'

  return (
    <img
      className="ml-4 roundedCircle img-fluid"
      src={avatar}
      href={avatar}
      alt={altAvatarImage}
      width="40px"
      height="50px"
    />
  )
}

export default HeaderShowUserImage
