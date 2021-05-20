import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
    // <nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>

    return (
        <Navbar bg="light" className="footer">
            <div
                style={{
                    fontSize: '15px',
                    color: 'black',
                    textAlign: 'center',
                    margin: 'auto'
                }}>
                © 2021 pesquisajus - v.18.05.21
            </div>
        </Navbar>
    )
}

export default Footer
