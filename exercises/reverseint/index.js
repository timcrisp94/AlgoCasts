// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('')

  return parseInt(reversed) * Math.sign(n)
}


module.exports = reverseInt;

/*
Math.sign helps us work with the negative without creating a conditional for positive and negative numbers

here's the problem with a conditional

function reverseInt(n) {
  const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('')

  if (n < 0) {
    return parseInt(reversed) * -1
  } else {
    return parseInt(reversed)
  }
}
*/