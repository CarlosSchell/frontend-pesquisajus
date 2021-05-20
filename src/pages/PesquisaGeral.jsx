import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { CSVLink } from 'react-csv'
import axios from 'axios'
import Publicacao from '../components/publicacoes/Publicacao'
import Loader from '../components/Loader'
import { PROCESSOS_UPDATE_SUCCESS } from '../constants/processosConstants'
// import incluiProcessoLista from '../../utils/incluiProcessoLista'
// import preencheZerosEsquerda from '../../utils/preencheZerosEsquerda'
import ReactConfig from '../utils/ReactConfig'

const PesquisaPublicacoes = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo PesquisaPorNome')
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.userLogin)

    // const userProcessos = useSelector((state) => state.userProcessos.processos) ?? []
    // console.log('userProcessos : ', userProcessos)
    const isProcessoModified =
        useSelector((state) => state.userProcessos.isProcessoModified) ?? false
    // console.log('isProcessoModified : ', isProcessoModified)

    const email = userInfo.email ?? ''
    const token = userInfo.token ?? ''
    const baseUrl = ReactConfig.baseUrl ?? ''

    const [nomeBuscaProcesso, setNomeBuscaProcesso] = useState('')
    const [nomeParte, setNomeParte] = useState('')
    const [triggerUseEffect, setTriggerUseEffect] = useState(true)
    const [loading, setLoading] = useState(false)

    const [publicacoes, setPublicacoes] = useState([])
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    const incluiProcessoListaPorNome = async (newprocesso) => {
        try {
            // eslint-disable-next-line no-console
            console.log('Entrou no incluiProcessoListaPorNome :', newprocesso)

            const config = {
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
            }

            const urlget = `${baseUrl}/users/getprocessos`
            const res = await axios.get(urlget, config)
            const processosFromDatabase = res.data.data.processos ?? []

            const newArrProcessos = [...processosFromDatabase, newprocesso]

            const urlpost = `${baseUrl}/users/gravaprocessos`
            await axios.post(urlpost, { email, processos: newArrProcessos }, config)

            dispatch({
                type: PROCESSOS_UPDATE_SUCCESS,
                payload: { processos: newArrProcessos, isProcessoModified: !isProcessoModified }
            })
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setPublicacoes([])
        // console.log('nomepesquisa OnSubmit :', nomeBuscaProcesso.trim())
        setNomeParte(nomeBuscaProcesso.trim())
        setTriggerUseEffect(!triggerUseEffect)
    }

    const onclickPesquisar = (e) => {
        setPublicacoes([])
        setNomeBuscaProcesso(e.target.value)
    }

    useEffect(() => {
        const fetchDatasDiarioNome = async () => {
            const config = {
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
            }
            const url = `${baseUrl}/processo/diarios/primeiroeultimo`
            const resDatas = await axios.get(url, config)
            setDataInicial(resDatas.data.data.dataPrimeiroDiario)
            setDataFinal(resDatas.data.data.dataUltimoDiario)
        }

        const fetchPublicacoes = async () => {
            const arrPublicacoes = []
            if (nomeParte !== '') {
                setLoading(true)

                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }

                const url = `${baseUrl}/publicacao/texto/`
                const res = await axios.post(url, { texto: nomeParte }, config)
                // console.log(res)

                let publicacoesFromFetch = res.data.data.publicacoes
                if (publicacoesFromFetch.length > 0) {
                    for (let i = 0; i < publicacoesFromFetch.length; i += 1) {
                        arrPublicacoes.push(publicacoesFromFetch[i])
                    }
                }
                setLoading(false)
                publicacoesFromFetch = []
            }
            return arrPublicacoes
        }

        const getPublicacoes = async () => {
            setPublicacoes([])
            let publicacoesFromServer = await fetchPublicacoes()
            setPublicacoes(publicacoesFromServer)
            publicacoesFromServer = []
        }

        fetchDatasDiarioNome()
        getPublicacoes()
    }, [nomeParte, baseUrl, token, triggerUseEffect, dispatch])

    // style={{ backgroundColor: '#ffecd9', minHeight: '89.7vh' }
    // <div className="innerbody" style={{ width: '100%' }}>

    // <div style={{
    //     margin: 'auto',
    //     width: '40%',
    //     minWidth: '340px',
    //     maxWidth: '450px',
    //     minHeight: '90vh',
    //     display: 'block',
    //     textAlign: 'center',
    //     backgroundColor: '#fcf3cf'
    // }}>

    return (
        <div className="body">
            <div
                style={{
                    width: '100%',
                    margin: '0 auto',
                    backgroundColor: '#fcf3cf'
                }}>
                <div style={{ minWidth: '340px', maxWidth: '450px', margin: '0 auto' }}>
                    <h3
                        className="mt-3 text-center"
                        style={{ textShadow: '1px 1px 1px lightgrey', textAlign: 'center' }}>
                        Pesquisar publicações do TJRS
                    </h3>

                    <p style={{ marginBottom: '10px', textAlign: 'center' }}>
                        Período: {dataInicial} a {dataFinal}
                    </p>

                    {loading && <Loader />}

                    <div style={{ fontSize: '14px', textAlign: 'center' }}>
                        Digite o <strong>nome da parte</strong>, o <strong>código da OAB</strong> do
                        advogado, ou o <strong>numero completo do </strong>
                        <strong>processo no padrão CNJ</strong>
                    </div>

                    {/* <p className="text-center" style={{ fontSize: '14px' }}>
                        inclua os zeros a esquerda e os separadores
                    </p> */}

                    <Form style={{ fontSize: '22px' }} onSubmit={onSubmit}>
                        <Form.Control
                            className="mt-3"
                            size="lg"
                            type="text"
                            placeholder="ex: 0001234-00.2021.8.21.0000"
                            value={nomeBuscaProcesso}
                            autoFocus
                            required
                            width="100%"
                            maxLength="60"
                            onChange={(e) => {
                                onclickPesquisar(e)
                            }}
                        />

                        <Button
                            className="btn btn-block mt-2 mb-2"
                            cname="commit"
                            variant="primary"
                            type="submit"
                            value="Pesquisar Publicacao">
                            Pesquisar Publicacao
                        </Button>
                    </Form>
                </div>

                <div style={{ width: '100%' }}>
                    {publicacoes.length === 0 && nomeParte !== '' && (
                        <div className="text-center my-1">Não foram encontradas publicações</div>
                    )}

                    {publicacoes.length > 0 && publicacoes.length <= 999 && (
                        <div className="text-center my-1">
                            Foram encontradas {publicacoes.length} publicações
                        </div>
                    )}

                    {publicacoes.length === 1000 && (
                        <div className="text-center my-1">
                            Existem mais de
                            {publicacoes.length} publicações
                        </div>
                    )}

                    {publicacoes.length === 1000 && (
                        <div className="text-center my-1">
                            O sistema apresenta no máximo 1000 publicações
                        </div>
                    )}

                    {publicacoes.length > 0 && (
                        <div className="text-center">
                            <CSVLink
                                data={publicacoes}
                                filename="pesquisajus.csv"
                                className="btn btn-outline-primary text-center"
                                variant="outline-info"
                                style={{ textDecoration: 'none' }}>
                                Baixar consulta em arquivo CSV
                            </CSVLink>
                        </div>
                    )}

                    <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                        {publicacoes.length > 0 &&
                            publicacoes.map((publicacao) => (
                                <Publicacao
                                    key={publicacao.id}
                                    publicacao={publicacao}
                                    textToHighlight={nomeParte}
                                    incluiProcessoLista={incluiProcessoListaPorNome}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PesquisaPublicacoes

// pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'
// validateProcesso(e.target.value)

// const validateProcesso = (nroProcesso) => {
//     // console.log('Numero do Processo: ', nroProcesso, nroProcesso.length)
//     nroProcesso = verificaZerosEsquerda(nroProcesso)
//     let isValid = false
//     if (nroProcesso.length === 25) {
//       isValid = true
//     }
//     setPublicacoes([])
//     setIsNroProcessoValido(isValid)
//     setNumeroBuscaProcesso(nroProcesso)

//     console.log('Numero do Processo: ', nroProcesso, nroProcesso.length, isValid)
//     return
//   }

// "0001234-00.2021.8.21.0000"
// pattern='[0-9]{1,7}[\-][0-9]{2}[\.][0-9]{4}[\.][0-9][\.][0-9]{2}[\.][0-9]{4}'

// <div
//   className="d-flex flex-column justify-content-center align-items-center"
//   style={{ backgroundColor: ' #ffecd9' }}
// >

//     <div
//     className="ml-1 mr-1 d-flex flex-column justify-content-center align-items-center"
//     style={{ minWidth: '360px' }}
//   >
