const validaNroProcesso = nroProcesso => {
  let re = /[0-9]{7,}[-][0-9]{2}[.][0-9]{4}[.][0-9][.][0-9]{2}[.][0-9]{4}/
  if (re.test(nroProcesso)) {
    return true
  } else {
    return false
  }
}