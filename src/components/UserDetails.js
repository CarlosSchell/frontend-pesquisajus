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

export default UserDetails
