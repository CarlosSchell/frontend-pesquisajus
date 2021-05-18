import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => (
    <Alert variant={variant} className="text-center">
        {children}
    </Alert>
)

Message.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Message
