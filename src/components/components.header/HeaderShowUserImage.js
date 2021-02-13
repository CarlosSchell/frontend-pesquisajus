
const HeaderShowUserImage = (props) => {
  // const userDisplayName = props.value
  const randomstring = Math.random().toString(36).slice(-12);
  const avatarGenCode = `https://robohash.org/${randomstring}?set=set4`
  const altAvatarImage = "Cat image"

  return (
    <div>
      <img 
        className="ml-4 roundedCircle img-fluid"
        src={avatarGenCode}
        alt={altAvatarImage}
        width="50px"
        height="50px"
      />
    </div>
  )
}

export default HeaderShowUserImage

//<img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
