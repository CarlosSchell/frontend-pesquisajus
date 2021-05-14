const textToClipboard = (nroProcesso) => {
    const dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = nroProcesso
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    // console.log('passou no textotclipboard: ', nroProcesso)
}

export default textToClipboard
