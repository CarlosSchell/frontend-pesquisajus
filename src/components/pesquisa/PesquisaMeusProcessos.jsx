import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Publicacoes from '../publicacoes/Publicacoes'
// import incluiProcessoLista from '../../utils/incluiProcessoLista'
import ReactConfig from '../../utils/ReactConfig'

const PesquisaMeusProcessos = () => {
  // eslint-disable-next-line no-console
  console.log('Entrou no lista de Publicacoes')
  const userInfo = useSelector((state) => state.userLogin)
  const userProcessos = useSelector((state) => state.userProcessos) ?? []
  const [publicacoes, setPublicacoes] = useState([])
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const token = userInfo.token ?? ''
  const baseUrl = ReactConfig.baseUrl ?? ''

  // let cabecalhoPagina = 'Data atual: '+ todays_date.toString().substring(0,20) +
  // ' -  Período da Base de Dados : '+ dataInicial + ' a ' + dataFinal

  useEffect(() => {
    const fetchDatasDiario = async () => {
      const config = {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      }
      const url = `${baseUrl}/processo/diarios/primeiroeultimo`
      const resDatas = await axios.get(url, config)
      setDataInicial(resDatas.data.data.dataPrimeiroDiario)
      setDataFinal(resDatas.data.data.dataUltimoDiario)
    }

    const fetchPublicacoes = async () => {
      const arrProc = userProcessos.processos ?? []
      const arrPublicacoes = []
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      const url = `${baseUrl}/publicacao/texto/`
      const promises = arrProc.map((proc) => axios.post(url, { texto: proc.processo }, config))
      const response = await Promise.all(promises)

      response.map((res) => {
        if (res.data.data.publicacoes[0]) {
          // console.log('res.data.data.publicacoes : ', res.data.data.publicacoes[0])
          const publicacoesFromFetch = res.data.data.publicacoes[0] // ?? {}
          arrPublicacoes.push(publicacoesFromFetch)
        }
        return null
      })
      return arrPublicacoes
    }

    const getPublicacoes = async () => {
      const publicacoesFromServer = await fetchPublicacoes()
      // Sort array by date
      const arrayUserPublicacoes = publicacoesFromServer

      let anoSort = ''
      let mesSort = ''
      let diaSort = ''
      for (let i = 0; i < arrayUserPublicacoes.length; i += 1) {
        anoSort = arrayUserPublicacoes[i].ano
        mesSort = arrayUserPublicacoes[i].mes
        diaSort = arrayUserPublicacoes[i].dia
        arrayUserPublicacoes[i].date = new Date(`${anoSort}-${mesSort}-${diaSort}`)
      }
      // console.log(arrayUserPublicacoes)
      const arrayUserPublicacoesSorted = arrayUserPublicacoes.sort(
        (a, b) =>
          // console.log(new Date(a.date) - new Date(b.date))
          new Date(b.date) - new Date(a.date)
      )
      // console.log('arrayUserPublicacoesSorted', arrayUserPublicacoesSorted)

      setPublicacoes(arrayUserPublicacoesSorted)
      // console.log('arrayUserPublicacoesSorted : ', arrayUserPublicacoesSorted)
      // dispatch({ type: PUBLICACOES_UPDATE_SUCCESS, payload: { //publicacoes: publicacoes } })
      // localStorage.setItem('userProcessos', JSON.stringify({ processos: processosFromDatabase }))
    }

    fetchDatasDiario()
    getPublicacoes()
  }, [baseUrl, userProcessos.processos, token])

  // [baseUrl, userProcessos.processos, token, dispatch])

  return (
    <div className="text-center mt-2" style={{ backgroundColor: ' #ffecd9' }}>
      <h3 style={{ textShadow: '1px 1px 1px lightgrey' }}>Últimas Publicações dos Meus Processos</h3>
      <p>
        Período:
        {dataInicial}
        {' '}
         a 
         {' '}
         {dataFinal}
      </p>
      <div className="mx-0 px-0">
        {publicacoes.length > 0 ? (
          <Publicacoes publicacoes={publicacoes} textToHighlight="" incluiProcessoLista="" />
        ) : (
          <div className="text-center">Não foram encontradas publicações para a lista dos Meus Processos</div>
        )}
      </div>
    </div>
  )
}

export default PesquisaMeusProcessos
