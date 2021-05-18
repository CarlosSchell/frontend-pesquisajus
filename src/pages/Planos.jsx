import React from 'react'
import { Link } from 'react-router-dom'

const Planos = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelos Planos')
    return (
        <div className="body">
            <div className="innerbody">
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Planos de Utilização
                </h3>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div
                    style={{
                        minWidth: '340px',
                        fontSize: '24px',
                        textAlign: 'center'
                    }}>
                    <br />
                    <div style={{ color: 'white' }}>
                        <div className="my-4 text-center btn btn-info">
                            <Link
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none'
                                }}>
                                Voltar à página principal
                            </Link>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Planos
