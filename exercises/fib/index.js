// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// is there a way to improve the runtime of a recursive solution for fib?

/*
MEMOIZATION : store the arguments of each function, along with the result
  -if the function is called again with the same arguments, return the precomputed result,
  rather than running again

  -any time we're asked to reduce the run time of a solution, reach for memoization
*/

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)

module.exports = fib;

// iterative solution : linear run time

// function fib(n) {
//   const result = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1]
//     const b = result[i - 2]

//     result.push(a + b)
//   }
//   return result[n]
// }

// recursive solution : exponential run time

// function fib(n) {
//   / base case
//   if (n < 2) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// }