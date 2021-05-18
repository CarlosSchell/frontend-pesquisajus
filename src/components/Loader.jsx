import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <div>
            <Spinner
                animation="border"
                role="status"
                style={{ margin: 'auto', display: 'block' }}
            />
            <p className="my-2 text-center">Aguarde....</p>
        </div>
    )
}

export default Loader

// {
//     /* //     <div>
//   <p>Aguarde....</p>
//   <Spinner animation="border" role="status" style={{ margin: 'auto', display: 'block' }}>
//     <span className="sr-only">Aguarde...</span>
//   </Spinner>
// //     </div>
// //   ) */
// }

// {/* <div className="spinnerBorder" role="status">
// <p>Aguarde....</p>
// <span className="visually-hidden">Aguarde...</span>
// </div> */}

// {/* <div>
// <Spinner animation="border" role="status" style={{ margin: 'auto', display: 'block' }} />
//     <span className="sr-only">Aguarde...</span>
// </Spinner>
// <p>Aguarde....</p>
// </div> */}
