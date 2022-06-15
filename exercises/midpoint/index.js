// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// linked list problem solving strategy //

// to find center, create two temp variables "slow" and "fast"
// assign slow and fast to first variable
// iterate and advance slow variable by one node, and fast by two nodes
  // after we advance fast, we check the next two nodes to see if they exist; 
  // if they do, we advance, if not, we know we're at the end and that slow is at the midpoint

function midpoint(list) {
  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

module.exports = midpoint;
