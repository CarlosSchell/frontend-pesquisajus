import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Publicacoes from './Publicacoes'
import ReactConfig from '../../utils/ReactConfig'


const ListaDePublicacoes = () => {

  const dispatch = useDispatch()
  const userLoginInfo = useSelector((state) => state.userLogin)
  const userProcessosInfo = useSelector((state) => state.userProcessos) ?? []
  const [publicacoes, setPublicacoes] = useState([])

  const token = userLoginInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''
  const todays_date = new Date()

  useEffect(() => {
    
    const fetchPublicacoes = async () => {
      const arr_loop = userProcessosInfo.processos ?? []
      const arr_publicacoes = []
      for (let i = 0; i < arr_loop.length; i++) {
        let nroProcesso = arr_loop[i]['processo']
        //console.log('nroProcesso : ', nroProcesso)           
        const config = { headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token } }
        const url = baseUrl + '/publicacao/' + nroProcesso   
        const res = await axios.get(url, config)
        if (res.data.data.publicacoes[0]) {
          //console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          const publicacoesFromFetch = res.data.data.publicacoes[0] //?? {}
          arr_publicacoes.push(publicacoesFromFetch)
        }
      }
      return arr_publicacoes
    }

    const getPublicacoes = async () => {
      const publicacoesFromServer = await fetchPublicacoes()
      // Sort array by date
      const arrayUserPublicacoes = publicacoesFromServer
      
      let ano_sort = ''
      let mes_sort = ''
      let dia_sort = ''
      for (let i = 0; i < arrayUserPublicacoes.length; i++) {
        ano_sort = arrayUserPublicacoes[i]['ano']
        mes_sort = arrayUserPublicacoes[i]['mes']
        dia_sort = arrayUserPublicacoes[i]['dia']
        arrayUserPublicacoes[i]['date'] = new Date(ano_sort + '-' + mes_sort + '-' + dia_sort)
      }
      console.log(arrayUserPublicacoes)
      const arrayUserPublicacoesSorted = arrayUserPublicacoes.sort(function(a,b){
        //console.log(new Date(a.date) - new Date(b.date))
        return new Date(b.date) - new Date(a.date);
      });
      console.log(arrayUserPublicacoesSorted)

      setPublicacoes(arrayUserPublicacoesSorted)
      console.log('arrayUserPublicacoesSorted : ', arrayUserPublicacoesSorted)
      //dispatch({ type: PUBLICACOES_UPDATE_SUCCESS, payload: { //publicacoes: publicacoes } })
      // localStorage.setItem('userProcessos', JSON.stringify({ processos: processosFromDatabase }))
    }

    getPublicacoes()
  }, [baseUrl, userProcessosInfo.processos, token, dispatch])

  return (
    <div className="text-center py-3 mt-3"
        style={{ backgroundColor: ' #ffecd9', }}>
      <h3>Publicações do Diário Oficial do TJRS</h3>
      <p>{'Data atual: '+ todays_date.toString().substring(0,20) + ' -  Base de Dados atualizada até o Diário Nro: 6947 de 25/03/2021'}</p>
      {publicacoes.length > 0 ? (
        <Publicacoes publicacoes={publicacoes} />
      ) : (
        <div className="text-center">'Não foram encontradas publicações para estes processos'</div>
      )}
    </div>
  )
}

// <Publicacoes publicacoes={publicacoes} />
// # let nroProcesso = '9000063-06.2018.8.21.0154'
// baseUrl: 'https://api-pesquisajus.com.br:21290/v1'
//https://api-pesquisajus.com.br:21290/v1/publicacao/0003366-19.2011.8.21.2001

export default ListaDePublicacoes
