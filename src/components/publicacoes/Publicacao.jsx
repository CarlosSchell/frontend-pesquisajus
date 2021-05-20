import React from 'react'
import PropTypes from 'prop-types'
import Highlighter from 'react-highlight-words'
import { Button } from 'react-bootstrap'
import IconTribunalPublicacao from './IconTribunalPublicacao'
import IconAddProcessosPublicacao from './IconAddProcessosPublicacao'
import IconWhatsappPublicacao from './IconWhatsappPublicacao'
// import '../../custom.css'
// import incluiProcessoLista from '../../utils/incluiProcessoLista.js'
// import ButtonWhatsapp from './ButtonWhatsapp'
import calculateDays from '../../utils/calculateDays'

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
                        <Button
                            style={{ marginRight: '10px' }}
                            variant="outline-info"
                            className="ml-0 justify-content-end"
                            >
                            <IconTribunalPublicacao processo={processo} court="TJRS" />
                        </Button>
                    </div>

                    <div>
                        {incluiProcessoLista && (
                            <Button
                                style={{ marginRight: '10px' }}
                                variant="outline-info"
                                className="ml-0 justify-content-end"
                                onClick={() => {
                                    onClickIncluirProcesso(processo, descricao)
                                }}>
                                <IconAddProcessosPublicacao />
                            </Button>
                        )}
                    </div>

                    <div>
                        <Button variant="outline-info" className="ml-0 justify-content-end">
                            <IconWhatsappPublicacao cellNumber={cellNumber} decisao={decisao} />
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
    publicacao: PropTypes.oneOfType([PropTypes.object]).isRequired,
    textToHighlight: PropTypes.string.isRequired,
    incluiProcessoLista: PropTypes.func.isRequired
}

export default Publicacao
