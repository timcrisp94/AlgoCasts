// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create an empty array called chunked
  const chunked = []
  // for each element in array
  for (let element of array) {
    // retrieve last elememt in chunked array (first will be undefined)
    const last = chunked[chunked.length - 1]
    // if last element does not exist or if its length is equal to chunk size
    if (!last || last.length === size) {
      // push current element into chunked array
      chunked.push([element])
      // else add the current element into the chunk
    } else {
      last.push(element)
    }
  }
  return chunked
}


// function chunk(array, size) {
//   // create an empty chunked array
//   const chunked = []
//   // create 'index' starting at 0
//   let index = 0
//   // while index is less than array.length
//   while (index < array.length) {
//     // push a slice of length size from array into chunked
//     chunked.push(array.slice(index, index + size))
//     // add size to index
//     index += size
//   }
//   return chunked
// }

module.exports = chunk;

/*
function chunk(array, size) {
  // create empty array to hold chunks 
  const chunked = []
  // for each n in "unchuncked" array
  for (let element of array) {
    // retrieve the last element in the "chunked"
    const last = chunked[chunked.length - 1]
    // if last element does not exist, or its length is equal to chunk size
    if (!last || last.length === size) {
      // push a new chunk into the chunked with the current n
      chunked.push([element])
      // else add the current element into the chunk 
    } else {
      last.push(element)
    }
  }  
  return chunked
}
*/

/*
function chunk(array, size) {
  // create a new chunked array
  const chunked = []
  // iterate over array
  for (let element of array) {
    // retrieve last element in chunked array
    const last = chunked[chunked.length - 1]
    // if the element doesn't exist or if .length === size
    if (!last || last.length === size) {
      // push element into chunked
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked
}

*/

/*
function chunk(array, size) {
  const chunked = []
  for (let n of array) {
    const last = chunked[chunked.length - 1]
    if (!last || chunked.length === size) {
      chunked.push([n])
    } else {
      last.push(n)
    }
  }
  return chunked
}
*/

/*
function chunk(array, size) {
  const chunked = []
  for (let element of array) {
    const last = chunked[chunked.length - 1]
    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked
}
*/