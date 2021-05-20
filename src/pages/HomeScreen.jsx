import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Footer from '../components/footer/Footer'

const HomeScreen = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Home')
    const { userLogin } = useSelector((state) => state)

    return (
        <div>
            <div className="body">
                <div style={{ minwidth: '340px', maxWidth: '450px' }}>
                    <div className="text-center mt-2">
                        <h1 style={{ textShadow: '1px 1px 1px lightgrey' }}>pesquisajus</h1>
                    </div>

                    {userLogin && userLogin.name !== 'Convidado' ? (
                        <div>
                            <div
                                style={{
                                    fontSize: '24px',
                                    color: 'darkblue',
                                    marginTop: '20px'
                                }}>
                                <strong>Olá {userLogin.name}!</strong>
                            </div>
                            <div
                                style={{
                                    fontSize: '24px',
                                    color: 'darkblue',
                                    marginTop: '10px',
                                    marginBottom: '15px'
                                }}>
                                Seja Bem vindo!
                            </div>

                            <div style={{ fontSize: '20px', marginTop: '8px' }}>
                                Clique no ícone Pesquisar para consultar publicações pelo nome da
                                parte, número do processo ou número da OAB
                            </div>

                            <div style={{ fontSize: '20px', marginTop: '8px' }}>
                                Clique no ícone Processos para criar uma lista de acompanhamento de
                                processos de seu interesse
                            </div>

                            <div
                                style={{
                                    fontSize: '20px',
                                    marginTop: '8px',
                                    marginBottom: '18vh'
                                }}>
                                O pesquisajus utiliza os dados do Diário Oficial do{' '}
                                <strong>TJRS</strong>
                            </div>
                        </div>
                    ) : (
                        <div style={{ fontSize: '20px' }}>
                            <div style={{ marginTop: '15px' }}>
                                Facilite a sua consulta a processos judiciais
                            </div>

                            <div style={{ marginTop: '8px' }}>
                                Consulte publicações pelo nome da parte, número do processo ou
                                número da OAB e também acessar o link para consulta no sistema do
                                tribunal
                            </div>

                            <div style={{ marginTop: '8px' }}>
                                Crie uma lista de acompanhamento de processos de seu interesse
                            </div>

                            <div style={{ marginTop: '15px' }}>
                                <Link to="/login">
                                    <Button variant="primary" size="lg">
                                        Já sou usuário
                                    </Button>
                                </Link>

                                <div
                                    style={{
                                        fontSize: '20px',
                                        color: 'darkblue',
                                        marginTop: '5px',
                                        marginBottom: '5px'
                                    }}>
                                    ou
                                </div>
                                <Link to="/register">
                                    <Button variant="secondary" size="lg">
                                        Novo usuário
                                    </Button>
                                </Link>
                            </div>

                            <div style={{ marginTop: '12px' }}>
                                O pesquisajus utiliza os dados do Diário Oficial do{' '}
                                <strong>TJRS</strong>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeScreen
