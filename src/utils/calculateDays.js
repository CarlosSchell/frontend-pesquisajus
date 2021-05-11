

const calculateDays = (firstDate, secondDate) => {

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  //let firstDate = new Date(2012, 1, 29, 12, 0, 0, 0); // 29th of Feb at noon your timezone
  //var secondDate = new Date(2012, 2, 1, 12, 0, 0, 0); // 2st of March at noon
  
  let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
  
  //console.log(firstDate, "to", secondDate, " - Difference: " + diffDays + " day");

  let diffMeses =  Math.floor((diffDays/30))
  //let restoDedias = diffDays  % 30

  let diffAnos =  Math.floor((diffDays/365))
  //let restoDeMeses = diffDays  % 30

  let badge_text = ''
  let badge_color = ''
  
  if (diffDays <= 1)  {
    badge_text = '' + diffDays.toString() + ' d';
    badge_color = '#A52A2A';    // bem vermelho
    //console.log('badge_text : ',badge_text)
  } else if (diffDays <= 2) {
    badge_text = '' + diffDays.toString() + ' d';
    badge_color = '#DA291C';   // bem vermelho
    //console.log('badge_text : ',badge_text)
  } else if (diffDays <= 4)  {
    badge_text = '' + diffDays.toString() + ' d';
    //console.log('badge_text : ',badge_text)
    badge_color = '#FF0000';
  } else if (diffDays <= 7)  {
    badge_text = '' + diffDays.toString() + ' d';
    //console.log('badge_text : ',badge_text)
    badge_color = '#FF4242';
  } else if (diffDays <= 20) {
    badge_text = diffDays.toString() + ' d';
    badge_color = '#FFA07A' ;
  } else if (diffDays <= 31) {
    badge_text = diffDays.toString() + ' d';
    badge_color = '#808080';
  } else if (diffDays <= 60) {
    badge_text = diffMeses.toString()  + ' m';
    badge_color = '#A9A9A9';
  } else if (diffDays <= 365) {
    badge_text = diffMeses.toString() + ' m';
    badge_color = '#A9A9A9';
    //badge_color = 'darkgreen';
  } else if (diffDays <= 730) {
    badge_text = diffAnos.toString()  + 'a';
    badge_color = 'darkgreen';
    //badge_color = 'darkgreen';
  } else {
    badge_text = diffAnos.toString()  + ' a';
    badge_color = 'black';
  }

  return [ badge_text, badge_color ]
}

//export default calculateDays

// firstDate = new Date()
// secondDate = new Date(2021, 02, 02)
// console.log(firstDate)
// console.log(secondDate)

// let badge_text_par = ''
// let badge_color_par = ''
// badge_text_par, badge_color_par = calculateDays(firstDate, secondDate)

// console.log(badge_text_par)
// console.log(badge_color_par)

export default calculateDays