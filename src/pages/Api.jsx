import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

//* <div style={{ backgroundColor: '#eaeded' }}>

const Api = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Api')
    return (
        <div className="body">
            <div className="innerbody" style={{ textAlign: 'left', width: '100hv' }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Especificação da API
                </h3>

                <div style={{ fontSize: '20px', textAlign: 'center' }}>
                    <p>
                        É fácil de integrar a API-REST (base de dados) do pesquisajus ao seu sistema
                        de controle de processos.
                    </p>

                    <p>
                        As informações das publicações estão classificadas de acordo com a sua
                        natureza, fornecendo uma rica base de informações para análise
                    </p>

                    <p>A consulta se faz com o uso de token de autenticação</p>

                    <div className="my-1">
                        <p>Caso tenha interesse, entre em Contato conosco pelo email&nbsp;:</p>
                        <Link to="/contact" style={{ fontSize: '20px' }}>
                            <Button size="md" className="my-4 text-center btn btn-primary">
                                contato@pesquisajus.com
                            </Button>
                        </Link>
                    </div>

                    <div style={{ color: 'white' }}>
                        <div className="my-4 text-center btn btn-secondary">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                Voltar à página principal
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Api
