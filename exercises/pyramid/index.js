// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// from 0 to n iterate through rows
  // create an empty string 'level'
  // from 0 to ?? iterate through columns
    // if columns should have #
      // add #
    // else add space
  // console.log(stair)

  // compare n to columns
  // n * 2 - 1 = columns

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = ''
    for (let column = 0; column < 2 * n - 1; column++) {
      if (column <= row) {
        level += '#'
      } else {
        level += ' '
      }
    }
    console.log(level)
  }
}

pyramid(3)




module.exports = pyramid;

