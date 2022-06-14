class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  size(integer) {
    let counter = 0
    let node = this.head

    while (node) {
      counter++
      node = node.next
    }
    return counter
  }

  getAt(index) {
    let node = this.head
    let counter = 0
    while (node) {
      if (counter === index) {
        return node
      }

      counter++
      node = node.next
    }
    return null
  }

  getFirst() {
    return this.getAt(0)
  }

  getLast() {
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const previous = this.getAt(index - 1) || this.getLast()
    const node = new Node(data, previous.next)
    previous.next = node
  }

  insertFirst(data) {
    this.insertAt(data, 0)
  }

  insertLast(data) {
    this.insertAt(data, this.size() - 1)
  }

  removeAt(index) {
    if (!this.head) {
      return
    }

    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }

  removeFirst() {
    return this.removeAt(0)
  }

  removeLast() {
    return this.removeAt(this.size() - 1)
  }
}