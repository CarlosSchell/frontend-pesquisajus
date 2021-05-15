const calculateDays = (firstDate, secondDate) => {
  const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
  // let firstDate = new Date(2012, 1, 29, 12, 0, 0, 0); // 29th of Feb at noon your timezone
  // var secondDate = new Date(2012, 2, 1, 12, 0, 0, 0); // 2st of March at noon

  const diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay))

  // console.log(firstDate, "to", secondDate, " - Difference: " + diffDays + " day");

  const diffMeses = Math.floor(diffDays / 30)
  // let restoDedias = diffDays  % 30

  const diffAnos = Math.floor(diffDays / 365)
  // let restoDeMeses = diffDays  % 30

  let badgeText = ''
  let badgeColor = ''

  if (diffDays <= 1) {
    badgeText = `${diffDays.toString()} d`
    badgeColor = '#A52A2A' // bem vermelho
    // console.log('badgeText : ',badgeText)
  } else if (diffDays <= 2) {
    badgeText = `${diffDays.toString()} d`
    badgeColor = '#DA291C' // bem vermelho
    // console.log('badgeText : ',badgeText)
  } else if (diffDays <= 4) {
    badgeText = `${diffDays.toString()} d`
    // console.log('badgeText : ',badgeText)
    badgeColor = '#FF0000'
  } else if (diffDays <= 7) {
    badgeText = `${diffDays.toString()} d`
    // console.log('badgeText : ',badgeText)
    badgeColor = '#FF4242'
  } else if (diffDays <= 20) {
    badgeText = `${diffDays.toString()} d`
    badgeColor = '#FFA07A'
  } else if (diffDays <= 31) {
    badgeText = `${diffDays.toString()} d`
    badgeColor = '#808080'
  } else if (diffDays <= 60) {
    badgeText = `${diffMeses.toString()} m`
    badgeColor = '#A9A9A9'
  } else if (diffDays <= 365) {
    badgeText = `${diffMeses.toString()} m`
    badgeColor = '#A9A9A9'
    // badgeColor = 'darkgreen';
  } else if (diffDays <= 730) {
    badgeText = `${diffAnos.toString()}a`
    badgeColor = 'darkgreen'
    // badgeColor = 'darkgreen';
  } else {
    badgeText = `${diffAnos.toString()} a`
    badgeColor = 'black'
  }

  return [badgeText, badgeColor]
}

// export default calculateDays

// firstDate = new Date()
// secondDate = new Date(2021, 02, 02)
// console.log(firstDate)
// console.log(secondDate)

// let badgeText_par = ''
// let badgeColor_par = ''
// badgeText_par, badgeColor_par = calculateDays(firstDate, secondDate)

// console.log(badgeText_par)
// console.log(badgeColor_par)

export default calculateDays
