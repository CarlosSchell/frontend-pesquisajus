import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const SobreNos = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Sobre nós')

    return (
        <div className="body">
            <div className="innerbody" style={{ textAlign: 'left' }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Sobre o pesquisajus
                </h3>

                <div
                    style={{
                        fontSize: '20px',
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>
                    <div>
                        O pesquisajus oferece acesso simples e rápido às publicacoes de processos judiciais no diário oficial.
                    </div>

                    <p className="mt-2">
                        Em sua construção foram empregadas modernas técnicas de projeto
                        de sistemas
                    </p>

                    <div>
                        Esperamos que voce aprecie o aplicativo, e contamos com a sua valiosa
                        opinião sobre a experiência de uso e sugestão de novas features
                    </div>

                    <br />

                    <div style={{ marginTop: '10px' }}>
                        <Link to="/contact" style={{ fontSize: '20px' }}>
                            <Button variant="primary" size="lg">
                                contato@pesquisajus.com
                            </Button>
                        </Link>
                    </div>
                </div>

                <br />
                <br />
                <br />


                <div className="text-center" style={{ color: 'black' }}>
                    <Link to="/" >
                        <Button variant="secondary">
                            Voltar à página principal
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SobreNos
