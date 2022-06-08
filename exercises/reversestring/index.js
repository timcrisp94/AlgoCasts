// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {  
  return str
  .split("")
  .reverse()
  .join("")  
}


module.exports = reverse;

// solution two - for loop

// function reverse(str) {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// solution three - reduce method

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, '')
// }