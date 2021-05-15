// 0107812-96.2020.8.21.7000

const preencheZerosEsquerda = (nroProcesso) => {
  let nroProcessoNovo = ''
  const posicaoSeparador = nroProcesso.indexOf('-')
  if (posicaoSeparador <= 8) {
    if (posicaoSeparador === 7) {
      nroProcessoNovo = `${nroProcesso}`
    }
    if (posicaoSeparador === 6) {
      nroProcessoNovo = `0${nroProcesso}`
    }
    if (posicaoSeparador === 5) {
      nroProcessoNovo = `00${nroProcesso}`
    }
    if (posicaoSeparador === 4) {
      nroProcessoNovo = `000${nroProcesso}`
    }
    if (posicaoSeparador === 3) {
      nroProcessoNovo = `0000${nroProcesso}`
    }
    if (posicaoSeparador === 2) {
      nroProcessoNovo = `0000${nroProcesso}`
    }
    if (posicaoSeparador === 1) {
      nroProcessoNovo = `00000${nroProcesso}`
    }
  }
  return nroProcessoNovo
}

export default preencheZerosEsquerda
