
const UserDetails = ({ user }) => {
  return (
    <div>
      <div>
        {user.email}{'   '}{user.role}{'   '}{user.token}
      </div>
      <br></br>
    </div> 

  )
}

export default UserDetails
