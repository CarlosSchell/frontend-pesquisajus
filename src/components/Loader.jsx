import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <>
      <p className=''>Aguarde....</p>
      <Spinner
        animation='border'
        role='status'
        
        style={{
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className='sr-only'>Aguarde...</span>
      </Spinner>
    </>
  )
}

export default Loader