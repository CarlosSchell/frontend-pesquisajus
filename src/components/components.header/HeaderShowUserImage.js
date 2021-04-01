import avatarImage from './avatar4944.png'

// const avatarName = './avatar4944.png'
// const avatarImage = require('./avatar4944.png')

const HeaderShowUserImage = (props) => {
  // const userDisplayName = props.value
  //const randomstring = Math.random().toString(36).slice(-12);
  //const randomstring = '4000'
  //const avatarGenCode = require('./avatar'+ randomstring +'.png')
  //const avatarGenCode = require('avatar4944.png')
  
  const altAvatarImage = 'User image'

  //<img alt="timer" src={require('./images/timer.png')} />

  return (
    <div>
      <img
        className="ml-4 roundedCircle img-fluid"
        src={avatarImage}
        alt={altAvatarImage}
        width="50px"
        height="50px"
      />
    </div>
  )
}

export default HeaderShowUserImage

//<img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
