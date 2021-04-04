


const editaNumeroProcesso = e => {
  console.log(e.target.value)
  const leftZero = '0'
  let nroProcesso = e.target.value.toString()
  setNroProcesso(nroProcesso)
  let lastDigit = nroProcesso.split('')[nroProcesso.length - 1]
  let LastInput = nroProcesso.substring(0, nroProcesso.length - 1)
  // Validação dos 7 primeiros dígitos do número do processo
  if (nroProcesso.length <= 7) {
    let reLessSevenDigits = /[0123456789-]/
    if (!reLessSevenDigits.test(lastDigit)) {
      e.target.value = LastInput
      setNroProcesso(LastInput)
    } else {
      console.log('Entrou')
      if (lastDigit === '-') {
        if (lastDigit === '-') {
          nroProcesso = leftZero.repeat(7 - nroProcesso.length + 1) + nroProcesso
          console.log(nroProcesso)
          e.target.value = nroProcesso
          setNroProcesso(nroProcesso)
        }
      }
    }
  }
  //					 1234567890123456789012345  1234567-89.2020.8.21.0100 1234567-89.2020.8.21-0100
  // // str = '1234567-12.2020.8.21.0100'
  if (nroProcesso.length > 8) {
    if (
      (nroProcesso.length === 11) |
      (nroProcesso.length === 16) |
      (nroProcesso.length === 18) |
      (nroProcesso.length === 21)
    ) {
      let reMoreSevenDigits = /[.]/
      if (!reMoreSevenDigits.test(lastDigit)) {
        e.target.value = LastInput
        setNroProcesso(LastInput)
      }
    } else {
      let reMoreSevenDigits = /[0123456789]/
      if (!reMoreSevenDigits.test(lastDigit)) {
        e.target.value = LastInput
        setNroProcesso(nroProcesso)
      }
    }
  }

  // 1234567-12.2020.8.21-1200
  // 2234567-13.2021.8.21.1300
  // 3234567-14.2022.8.21.1400
  // 4234567-15.2023.8.21.1500
  // 5234567-16.2024.8.21.1600
  // 6234567-17.2025.8.21.1700

  // Validação do número do processo completo
  if (nroProcesso.length === 25) {
    // console.log('Chegou nos 25 dígitos : ', '*', nroProcesso, '*')
    e.target.value = nroProcesso.substring(0, 25) // + ' Ok!'
    setNroProcesso(nroProcesso)
    if (validaNroProcesso(nroProcesso)) {
      // console.log(`${nroProcesso} é válido !!!`)
      setIsNroProcessoValido(true)
      btnNroProcessoRef.current.focus()
    } else {
      setIsNroProcessoValido(false)
      console.log(`${nroProcesso}  é Inválido !!!`)
    }
  }
}



export default editaNumeroProcesso
