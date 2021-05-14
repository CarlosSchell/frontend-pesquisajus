import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    <div>
        <p>Aguarde....</p>
        <Spinner
            animation="border"
            role="status"
            style={{ margin: 'auto', display: 'block' }}
        >
            <span className="sr-only">Aguarde...</span>
        </Spinner>
    </div>
}

export default Loader
