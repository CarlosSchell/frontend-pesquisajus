import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'
import { Button } from 'react-bootstrap'
// import '../../custom.css'
// import incluiProcessoLista from '../../utils/incluiProcessoLista.js'
import ButtonWhatsapp from './ButtonWhatsapp'
import calculateDays from '../../utils/calculateDays'

import court from '../../utils/court.png'

const Publicacao = ({ publicacao, textToHighlight, incluiProcessoLista }) => {
    // const uf       =  publicacao.uf
    const { cidade } = publicacao
    const { grau } = publicacao
    let descgrau = ''
    if (grau === '1') {
        descgrau = 'Primeiro Grau'
    } else {
        descgrau = 'Segundo Grau'
    }
    const { diario } = publicacao
    const pagina = parseInt(publicacao.pagina, 10).toString()
    const { dia } = publicacao
    const { mes } = publicacao
    const { ano } = publicacao
    const dataAtual = new Date()
    const dataDiario = new Date(parseInt(ano, 10), parseInt(mes, 10) - 1, parseInt(dia, 10))

    let arrBadge = []
    let badgeText = ''
    let badgeColor = ''
    arrBadge = calculateDays(dataAtual, dataDiario)
    // eslint-disable-next-line prefer-destructuring
    badgeText = arrBadge[0]
    // eslint-disable-next-line prefer-destructuring
    badgeColor = arrBadge[1]

    const { foro } = publicacao
    let descforo = ''
    if (grau === '1') {
        descforo = foro
    } else {
        descforo = ''
    }

    const { vara } = publicacao
    const desctipo = publicacao.desctipo ?? ''
    const { processo } = publicacao
    // const outronumero =  publicacao.outronumero
    const assunto = publicacao.assunto ?? ''
    const { decisao } = publicacao
    const descricao = decisao.substr(33, 57)

    // WhatsApp Data
    const cellNumber = '51991068021' // futuramente colocar o numero do advogado / cliente / indicado
    const texto = processo.descricao

    const onClickIncluirProcesso = () => {
        // console.log('onClickIncluirProcesso :', processo, descricao)
        incluiProcessoLista({ processo, descricao })
    }

    return (
        <div>
            <hr />
            <div
                className="d-flex flex-row justify-content-between"
                style={{
                    display: 'flex',
                    marginBottom: '05px',
                    marginTop: '0px',
                    alignItems: 'center'
                }}>
                <div
                    style={{
                        color: 'blue',
                        fontSize: '1.20em'
                    }}>
                    {'  '}
                    <a href="/">{processo}</a>
                </div>

                <div className="d-flex flex-row justify-content-start">
                    <div className="notification" style={{ backgroundColor: badgeColor }}>
                        <span>{badgeText}</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="d-flex flex-row justify-content-start">
                    <div>
                        <a
                            href="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
                            onClick={() => textToClipboard(processo)}
                            target="_blank"
                            rel="noreferrer"
                            style={{}}>
                            <Button variant="outline-info" className="ml-3 mr-3">
                                <img
                                    className="ml-2 justify-content-end"
                                    src={court}
                                    alt={court}
                                    width="20px"
                                    height="22px"
                                />
                            </Button>
                        </a>
                    </div>

                    <div>
                        {incluiProcessoLista && (
                            <Button
                                variant="outline-info"
                                className="ml-0 justify-content-end"
                                onClick={() => {
                                    onClickIncluirProcesso(processo, descricao)
                                }}>
                                <div>

                                    <div className="publicacaoicon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            fill="currentColor"
                                            className="bi bi-layout-text-window-reverse"
                                            viewBox="0 0 16 16">
                                            <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z" />
                                        </svg>
                                    </div>
                                </div>
                            </Button>
                        )}
                    </div>

                    <div style={{}}>
                        <Button variant="outline-info">
                            <ButtonWhatsapp cellNumber={cellNumber} texto={texto} size={21} />
                        </Button>
                    </div>
                </div>
            </div>

            <div>
                <span
                    style={{
                        color: 'darkblue',
                        fontSize: '18px',
                        fontWeigth: '900'
                    }}>
                    {'TJRS'}
                    {' - '}
                    {dia}
                    {'/'}
                    {mes}
                    {'/'}
                    {ano}
                </span>
                <span
                    style={{
                        color: 'black',
                        fontSize: '1.1em',
                        fontWeigth: '300'
                    }}>
                    {'   -   '}
                    {'Diário: '}
                    {diario}
                    {' - '}
                    {'Pág. '}
                    {pagina}
                    {' - '}
                    {descgrau}
                    {' - '}
                    {cidade}
                </span>
            </div>

            <p
                style={{
                    color: '#606060',
                    marginBottom: '5px',
                    marginTop: '5px'
                }}>
                {descforo ? `${descforo} -  ` : ''}
                {vara}
                {desctipo ? `- ${desctipo}` : ''}
                {assunto ? `- ${assunto}` : ''}
            </p>

            <p style={{ marginBottom: '3px', marginTop: '3px' }}>
                <Highlighter
                    highlightClassName="highlight"
                    highlightStyle={{
                        fontWeight: 'bold',
                        backgroundColor: '#F8DE7E'
                    }}
                    searchWords={[textToHighlight]}
                    autoEscape
                    activeIndex={-1}
                    caseSensitive={false}
                    textToHighlight={decisao}
                />
            </p>
            <hr />
        </div>
    )
}

Publicacao.propTypes = {
    publicacao: PropTypes.string.isRequired,
    textToHighlight: PropTypes.string.isRequired,
    incluiProcessoLista: PropTypes.func.isRequired
}

export default Publicacao

// {/* <span style={{ color: 'black'}}>CNJ:</span>  */}
