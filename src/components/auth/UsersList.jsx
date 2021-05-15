import React from 'react'
import UserDetails from './UserDetails'

const UsersList = ({ users }) => {
  <div>
    {users.map((user) => (
      <UserDetails key={user.id} user={user} />
    ))}
  </div>
}

export default UsersList
