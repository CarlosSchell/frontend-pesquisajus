import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { CSVLink } from 'react-csv'
import axios from 'axios'
import DiarioDownload from '../components/downloads/DiarioDownload'
// import Loader from '../Loader'//
import Message from '../components/Message'
import Loader from '../components/Loader'
import ReactConfig from '../utils/ReactConfig'

const Downloads = () => {
    // eslint-disable-next-line no-console
    console.log('Passou pelo Downloads')
    const userInfo = useSelector((state) => state.userLogin)

    // const email = userInfo.email ?? ''
    const token = userInfo.token ?? ''
    const baseUrl = ReactConfig.baseUrl ?? ''

    const [diarios, setDiarios] = useState('')
    const [loading, setLoading] = useState(false)
    const [problem, setProblem] = useState('')

    useEffect(() => {
        const fetchDiarios = async () => {
            try {
                setLoading(true)
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
                const url = `${baseUrl}/processo/diarios/todos`
                const res = await axios.get(url, config)

                const arrDiarios = []
                let diariosFromFetch = res.data.data.diarios
                if (diariosFromFetch.length > 0) {
                    // console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
                    for (let i = 0; i < diariosFromFetch.length; i += 1) {
                        // let diarioVetor = diariosFromFetch[i]
                        // let nroDiario = diariosFromFetch[i]['diario']
                        // let gnameDiario = diariosFromFetch[i]['gname']
                        // console.log('nroDiario : ', nroDiario, gnameDiario)
                        // console.log('diarioVetor : ', diarioVetor)
                        arrDiarios.push(diariosFromFetch[i])
                    }
                    diariosFromFetch = []
                }

                setLoading(false)
                // console.log('arrDiarios : ', arrDiarios)
                return arrDiarios
            } catch (error) {
                // eslint-disable-next-line no-console
                console.log(error)
                const errorStatus = error.response.data.status
                const errorMessage = error.response.data.message
                // console.log('Erro.response.status : ', errorStatus)       //401
                // console.log('Erro.response.message : ', errorMessage)
                // console.log('Erro.response.data.error : ', error.response.data.error)
                if (errorStatus !== 'success') {
                    // 'fail'
                    setProblem(errorMessage)
                }
                setLoading(false)
            }
            return []
        }

        const getDiarios = async () => {
            const diariosFromServer = await fetchDiarios()
            setDiarios(diariosFromServer)
            // eslint-disable-next-line no-console
            // console.log(diariosFromServer[1])
        }

        getDiarios()
    }, [baseUrl, token])

    // }, [diarios, baseUrl, token, dispatch]) //  backgroundColor: '#eaeded' }}>

    return (
        <div className="body">
            <div className="" 
                style={{ 
                    display: 'flex',
                    margin: 'auto',
                    flexDirection: 'column',
                    textAlign: 'center',
                    backgroundColor: '#fcf3cf',
                }}>
                <h3 className="my-3 text-center" style={{ textShadow: '1px 1px 1px lightgrey' }}>
                    Baixar Edições do Diário Oficial do TJRS
                </h3>

                {problem && <Message variant="danger">{problem}</Message>}
                {loading && <Loader />}

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    {diarios.length > 0 ? (
                        diarios.map((diario) => (
                            // eslint-disable-next-line no-underscore-dangle
                            <DiarioDownload key={diario._id} diario={diario} token={token} />
                        ))
                    ) : (
                        <div />
                    )}
                </div>

                <div style={{ color: 'white', textAlign: 'center' }}>
                    <div className="mt-5 mb-5text-center btn btn-info">
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Voltar à página principal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Downloads
