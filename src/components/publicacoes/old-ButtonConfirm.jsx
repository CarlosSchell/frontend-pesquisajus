import React from 'react'
import PropTypes from 'prop-types'

const ButtonConfirm = ({ text, size }) => {
    return <Button size={size}>{text}</Button>
}

ButtonConfirm.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
}

export default ButtonConfirm
