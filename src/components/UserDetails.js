
const UserDetails = ({ user }) => {
  return (
      <div>
        {user.email}{'   '}{user.role}{'   '}{user.token}
      </div>

  )
}

export default UserDetails
