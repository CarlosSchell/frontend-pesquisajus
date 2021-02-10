import UserDetails from './UserDetails'

const UsersList = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
         <UserDetails key={index} user={user} />
      ))}
    </>
  )
}

export default UsersList
