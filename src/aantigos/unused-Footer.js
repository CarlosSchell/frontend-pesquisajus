import React from 'react'
import { Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div className="text-center">Copyright 2021&copy; pesquisajus</div>
      <Nav.Link className="text-center" href="/about">
        <strong>Sobre</strong>
      </Nav.Link>
    </footer>
  )
}

export default Footer
