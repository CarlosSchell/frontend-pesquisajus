

const textToClipboard = nroProcesso => {
  let dummy = document.createElement('textarea')
  document.body.appendChild(dummy)
  dummy.value = nroProcesso
  dummy.select()
  document.execCommand('copy')
  document.body.removeChild(dummy)
}

export default textToClipboard