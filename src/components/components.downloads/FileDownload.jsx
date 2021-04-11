import React from "react"
import axios from "axios"
import { Container, Button } from 'react-bootstrap'

//import "./download.css"


const DownloadFile = () => {

  // const url = 'https://www.pesquisajus.com/avatars/tjrs-6953-2-capital-20210405.json'

  // downloadCSV: function(data){
  //   var MIME_TYPE = "text/csv";

  //   var blob = new Blob([data], {type: MIME_TYPE});
  //   window.location.href = window.URL.createObjectURL(blob);
  // }
  
  const getJSONFileFromServer = async () => {  

    // token = ''
    // const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
    const config = { headers: { 'Content-Type': 'application/json'} }
    // const url = baseUrl + '/publicacao/' + nroProcesso   

    // const url = 'https://www.pesquisajus.com/avatars/tjrs-6953-2-capital-20210405.json'

    const url = 'https://api-pesquisajus.com.br:21290/v1/publicacao/downloadjson'
    const res = await axios.post(url, config)

    const filedataJSON = res.data.data
    console.log('filedataJSON : ', filedataJSON)
    const fileBlob = new Blob( [JSON.stringify(filedataJSON), null, 2], {type: 'application/json'});

    const element = document.createElement("a")
    element.href = URL.createObjectURL(fileBlob)
    element.download = "arquivo.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click()
    document.body.removeChild(element)

    return 
  }

  return (
    <>
      <h1>Download Arquivos</h1>
      <Container className="d-flex flex-row">
        <div>
          <p><strong>Diário : 6794</strong></p>
          <p>Data   : 23/02/2020</p>
          <Button size="sm" variant="outline-info" className="btn btn-outline-info" onClick={getJSONFileFromServer}>json</Button>
          <Button size="sm" variant="outline-info" className="btn btn-outline-info" onClick={getJSONFileFromServer}>csv</Button>
          <Button size="sm" variant="outline-info" className="btn btn-outline-info" onClick={getJSONFileFromServer}>txt</Button>
          <Button size="sm" variant="outline-info" className="btn btn-outline-info" onClick={getJSONFileFromServer}>pdf</Button>
        </div>


      </Container>
  </>
  )
}

export default DownloadFile


