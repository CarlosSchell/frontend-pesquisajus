import React from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import { useSelector } from 'react-redux'
import ReactConfig from '../../utils/ReactConfig'

// <DiarioDownload key={index} diario={diario}} />

const DiarioDownload = ({ index, diario, token }) => {
    const baseUrl = ReactConfig.baseUrl ?? ''
    // const userInfo = useSelector((state) => state.userLogin)
    // const token = userInfo.token ?? ''
    // console.log('token : ', token)

    const { uf } = diario
    const nrodiario = diario.diario
    // console.log('Passou pelo DiarioDownload : ', nrodiario)
    // const cidade = diario.cidade
    // const grau = diario.grau
    const { gname } = diario
    // let descgrau = ''
    // if (grau === '1') {
    //   descgrau = 'Primeiro Grau'
    // } else {
    //   descgrau = 'Segundo Grau'
    // }
    // const diario = diario.diario
    const { dia } = diario
    const { mes } = diario
    const { ano } = diario
    const data = `${dia}/${mes}/${ano}`
    const arquivo = `tj${diario.uf.toLowerCase()}-${diario.diario}-${
        diario.gname
    }`
    // console.log('arquivo de cima: ', arquivo)

    const getFileFromServer = async (extensao) => {
        // console.log('arquivo: ', arquivo)
        // console.log('extensao: ', extensao)
        // console.log('token: ', token)

        let arquivo_download = arquivo

        let MIME_TYPE = ''
        let config = ''

        if (extensao === 'pdf') {
            MIME_TYPE = 'application/pdf'
            config = {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/pdf',
                    Authorization: `Bearer ${token}`
                }
            }
        }
        if (extensao === 'txt') {
            MIME_TYPE = 'text/plain'
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: MIME_TYPE,
                    Authorization: `Bearer ${token}`
                }
            }
        }
        if (extensao === 'csv') {
            arquivo_download = `${arquivo}-${ano}${mes}${dia}`
            MIME_TYPE = 'text/csv'
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: MIME_TYPE,
                    Authorization: `Bearer ${token}`
                }
            }
        }
        if (extensao === 'json') {
            arquivo_download = `${arquivo}-${ano}${mes}${dia}`
            MIME_TYPE = 'application/json'
            config = {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: MIME_TYPE,
                    Authorization: `Bearer ${token}`
                }
            }
        }

        // console.log('baseUrl: ', baseUrl)
        const url = `${baseUrl}/publicacao/download`
        const postData = { arquivo: arquivo_download, extensao }
        // console.log('postData', postData)

        try {
            const res = await axios.post(url, postData, config)
            let fileBlob = ''
            if (extensao === 'json') {
                const { data } = res
                // console.log('res : ', res)
                // console.log('res.data : ', res.data)
                fileBlob = new Blob([JSON.stringify(data), null, 2], {
                    type: MIME_TYPE
                })
            } else {
                const { data } = res
                // console.log('data : ', data)
                fileBlob = new Blob([data], { type: MIME_TYPE })
            }
            // const fileBlob = new Blob([data])
            // console.log('fileBlob : ', fileBlob)
            const element = document.createElement('a')
            element.href = URL.createObjectURL(fileBlob)
            element.download = `${arquivo}.${extensao}`
            document.body.appendChild(element) // Required for this to work in FireFox
            element.click()
            document.body.removeChild(element)
        } catch {}
    }

    return (
        <div>
            <div
                style={{
                    width: '213px',
                    height: '90px',
                    border: '1px solid',
                    borderRadius: '5px',
                    margin: '5px'
                }}
            >
                <p
                    style={{
                        margin: '4px 0px 0px 4px',
                        padding: '0px',
                        paddingLeft: '5px'
                    }}
                >
                    <strong>
                        Diário:
                        {nrodiario} -{data}
                    </strong>
                </p>

                <p
                    style={{
                        margin: '0px 0px 0px 10px',
                        padding: '0px',
                        paddingLeft: '1px'
                    }}
                >
                    <strong>
                        TJ
                        {uf}
                        -Grau
                        {gname}
                    </strong>
                </p>

                <Button
                    size="sm"
                    variant="outline-info"
                    className="btn btn-outline-info"
                    style={{
                        margin: '0px 0px 0px 10px',
                        padding: '0px 10px 1px 10px'
                    }}
                    onClick={() => {
                        getFileFromServer('pdf')
                    }}
                >
                    pdf
                </Button>
                <Button
                    size="sm"
                    variant="outline-info"
                    className="btn btn-outline-info"
                    style={{
                        margin: '0px 0px 0px 5px',
                        padding: '0px 10px 1px 10px'
                    }}
                    onClick={() => {
                        getFileFromServer('txt')
                    }}
                >
                    txt
                </Button>
                <Button
                    size="sm"
                    variant="outline-info"
                    className="btn btn-outline-info"
                    style={{
                        margin: '0px 0px 0px 5px',
                        padding: '0px 10px 1px 10px'
                    }}
                    onClick={() => {
                        getFileFromServer('csv')
                    }}
                >
                    csv
                </Button>
                <Button
                    size="sm"
                    variant="outline-info"
                    className="btn btn-outline-info"
                    style={{
                        margin: '0px 0px 0px 5px',
                        padding: '0px 10px 1px 10px'
                    }}
                    onClick={() => {
                        getFileFromServer('json')
                    }}
                >
                    json
                </Button>
            </div>
        </div>
    )
}

export default DiarioDownload
