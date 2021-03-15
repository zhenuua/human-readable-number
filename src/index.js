module.exports = function toReadable (number) {
    const numbersDirect = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const teens = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
if (number === 0){
        return "zero";
    }
    if (number < 20){
        return numbersDirect[number]
    } 
    if (number < 100 && number % 10 === 0){
      return teens[number]
    } if (number % 100 === 0){
      let findhundred = Math.floor(number / 100)
      
      return `${numbersDirect[findhundred]} hundred`
    }
  
  if (number % 100 < 20){
let findhundred = Math.floor(number / 100)
      let findteens = number % 100
      return `${numbersDirect[findhundred]} hundred ${numbersDirect[findteens]}`
    }
      if (number < 100){
      let findteens = 10 * Math.floor(number / 10);
      let findnumbers = number % 10;
      return `${teens[findteens]} ${numbersDirect[findnumbers]}`
    } else {
  let findhundred = Math.floor(number / 100)
  let findteens = Math.floor(number / 10);
  findteens = 10 * (findteens % 10);
  let findnumbers = number % 10;
   if (findnumbers === 0){
     return `${numbersDirect[findhundred]} hundred ${teens[findteens]}`
   } else {
  return `${numbersDirect[findhundred]} hundred ${teens[findteens]} ${numbersDirect[findnumbers]}`
    }}}