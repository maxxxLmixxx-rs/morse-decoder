const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  function chunk(expr, chunkNumber) {
    let x, temporary = [];
    for (x = 0; x < expr.length; x += chunkNumber) {
      temporary.push(expr.slice(x, x + chunkNumber));
    } return temporary;
  }

  const SPACER = '**********';
  let chunkedArray = chunk(expr, 10).map(sb => sb === SPACER ? [' '] : chunk(sb, 2));
  let morsArray = chunkedArray.map(subarray => {
    let mors = '';
    for (let sym of subarray) {
      if (sym === '10') mors += '.';
      if (sym === '11') mors += '-';
      if (sym === ' ') mors += ' ';
    } return mors;
  }); return morsArray.map(el => MORSE_TABLE[el] ? MORSE_TABLE[el] : el).join('');
}

module.exports = {
    decode
}