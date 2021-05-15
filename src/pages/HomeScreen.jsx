import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const HomeScreen = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Home')
    const { userLogin } = useSelector((state) => state)

    return (
        <div style={{ backgroundColor: '#eaeded' }}>
            <div
                style={{
                    width: '40%',
                    margin: 'auto',
                    minWidth: '340px',
                    minHeight: '92vh',
                    textAlign: 'center'
                }}
            >
                <div className="text-center mt-2">
                    <h1 style={{ textShadow: '1px 1px 1px lightgrey' }}>
                        pesquisajus
                    </h1>
                </div>

                {userLogin && userLogin.name !== 'Convidado' ? (
                    <div>
                        <div
                            style={{
                                fontSize: '24px',
                                color: 'darkblue',
                                marginTop: '20px'
                            }}
                        >
                            <strong>
                                Olá 
                                {userLogin.name}
                                !
                            </strong>
                        </div>
                        <div
                            style={{
                                fontSize: '24px',
                                color: 'darkblue',
                                marginTop: '10px',
                                marginBottom: '15px'
                            }}
                        >
                            Seja Bem vindo!
                        </div>

                        <div style={{ fontSize: '20px', marginTop: '8px' }}>
                            Clique no ícone Pesquisar para consultar publicações
                            pelo nome da parte, número do processo ou número da
                            OAB
                        </div>

                        <div style={{ fontSize: '20px', marginTop: '8px' }}>
                            Clique no ícone Processos para criar uma lista de
                            acompanhamento de processos de seu interesse
                        </div>

                        <div
                            style={{
                                fontSize: '20px',
                                marginTop: '8px',
                                marginBottom: '18vh'
                            }}
                        >
                            O pesquisajus utiliza os dados do Diário Oficial do
                            {' '}
                            <strong>TJRS</strong>
                        </div>
                    </div>
                ) : (
                    <div style={{ fontSize: '20px' }}>
                        <div style={{ marginTop: '15px' }}>
                            Facilite a sua consulta a processos judiciais
                        </div>

                        <div style={{ marginTop: '8px' }}>
                            Consulte publicações pelo nome da parte, número do
                            processo ou número da OAB e também acessar o link
                            para consulta no sistema do tribunal
                        </div>

                        <div style={{ marginTop: '8px' }}>
                            Crie uma lista de acompanhamento de processos de seu
                            interesse
                        </div>

                        <div style={{ marginTop: '15px' }}>
                            <Link to="/login">
                                <Button variant="info" size="lg">
                                    Já sou usuário!
                                </Button>
                            </Link>

                            <div
                                style={{
                                    fontSize: '20px',
                                    color: 'darkblue',
                                    marginTop: '5px',
                                    marginBottom: '5px'
                                }}
                            >
                                ou
                            </div>
                            <Link to="/register">
                                <Button variant="info" size="lg">
                                    Novo usuário!
                                </Button>
                            </Link>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                            O pesquisajus utiliza os dados do Diário Oficial do
                            {' '}
                            <strong>TJRS</strong>
                        </div>
                    </div>
                )}

                <div
                    style={{
                        fontSize: '18px',
                        color: 'grey',
                        marginTop: '25px'
                    }}
                >
                    © 2021 pesquisajus - v.13.05.21.0
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
