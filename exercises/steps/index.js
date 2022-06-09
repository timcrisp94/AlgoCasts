// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // from 0 to n (iterate through rows)
  for (let row = 0; row < n; row++) {
    // create an empty string 'stair'
    let stair = ''
    // from 0 to n(iterate through columns)
    for (let column = 0; column < n; column++) {
      // if current column is equal to or less than current row
      if (column <= row) {
        // add a # to 'stair'
        stair += '#'
        // else
      } else {
        // add a space to 'stair'
        stair += ' '
      }
    }
    console.log(stair)
  }
}
steps(2)

module.exports = steps;

// recursive solution

// function printNumber(n, dec = 1) {
//   // base case
//   if (n === 0) {
//     return
//   }
//   console.log(n)
//   printNumber(n - dec)
// }

// printNumber(10)

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return
//   }

//   if (n === stair.length) {
//     console.log(stair)
//     return steps(n, row + 1)
//   }

//   if (stair.length <= row) {
//     stair += '#'
//   } else {
//     stair += ' '
//   }
//   steps(n, row, stair)
// }

// steps(3)

// function steps(n) {
//   // from 0 to n (iterate through rows)
//   for (let row = 0; row < n; row++) {
//     // create an empty string 'stair'
//     let stair = ''
//     // from 0 to n(iterate through columns)
//     for (let column = 0; column < n; column++) {
//      // if current column is equal to or less than current row
//       if (column <= row) {
//       // add a # to 'stair'
//       stair += '#'
//       // else
//       } else {
//       // add a space to 'stair'
//       stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }
// steps(2)