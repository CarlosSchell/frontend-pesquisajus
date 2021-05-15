import React from 'react'
import PropTypes from 'prop-types'

const UserDetails = ({ user }) => (
  <div>
    <div>
      {user.email}
      {'   '}
      {user.role}
      {'   '}
      {user.token}
    </div>
    <br />
  </div>
)

UserDetails.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    role: PropTypes.string,
    token: PropTypes.string
  }).isRequired
}

export default UserDetails
