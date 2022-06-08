// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return reversed === str
}



module.exports = palindrome;


/*

solution two - using the every method to compare each character to its opposite [str.length - i - 1]

not an ideal solution as it compares the same things more than once, but an opportunity to solve using an advanced array iterator method, and then use a more efficient method and impress your interviewer 

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

*/

