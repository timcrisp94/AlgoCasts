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

  // calculate midpoint of column



function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2)
  
  for (let row = 0; row < n; row++) {
    let level = ''
    for (let column = 0; column < 2 * n - 1; column++) {
      // check that current column is within the bounds of 
      // midpoint - row and midpoint + row
      if (midpoint - row <= column && midpoint + row >= column) {
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


/*
-- recursive solution -- 

function pyramid(n, row = 0, level = '') {
  / base case
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }
  pyramid(n, row, level + add)
}


const columns = [0, 1, 2, 3, 4]
const row = 0

/ number of elements divided by 2,
/ so for above: 
Math.floor ((5 / 2))

/ and if row goes to 1:
Math.floor ((5 / 2)) >> 2
Math.floor ((5 / 2)) + 1 >> 3
Math.floor ((5 / 2)) - 1 >> 1
/ gives us # at indexes 1, 2, 3

/ and the formula is"
Math.floor((2 * n - 1 / 2))

*/