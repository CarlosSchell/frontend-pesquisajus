// 0107812-96.2020.8.21.7000

const preencheZerosEsquerda = (nroProcesso) => {
  const posicaoSeparador = nroProcesso.indexOf('-')
  if (posicaoSeparador <= 8) {
    if (posicaoSeparador === 7) {
      nroProcesso = `${nroProcesso}`
    }
    if (posicaoSeparador === 6) {
      nroProcesso = `0${nroProcesso}`
    }
    if (posicaoSeparador === 5) {
      nroProcesso = `00${nroProcesso}`
    }
    if (posicaoSeparador === 4) {
      nroProcesso = `000${nroProcesso}`
    }
    if (posicaoSeparador === 3) {
      nroProcesso = `0000${nroProcesso}`
    }
    if (posicaoSeparador === 2) {
      nroProcesso = `0000${nroProcesso}`
    }
    if (posicaoSeparador === 1) {
      nroProcesso = `00000${nroProcesso}`
    }
  }
  return nroProcesso
}

export default preencheZerosEsquerda
