class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    const popped = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    popped.prev = null;
    this.length--;
    return popped;
  }
  shift() {
    if (!this.head) return;
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      shifted.next = null;
      this.head.prev = null;
    }
    this.length--;
    return shifted;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(position) {
    if (position >= this.length || position < 0) return;
    //could add logic to start at tail or head
    let currPosition = 0;
    let currNode = this.head;
    while (currPosition < position) {
      currNode = currNode.next;
      currPosition++;
    }
    return currNode;
  }
  set(position, value) {
    if (position < 0 || position >= this.length) return;
    const found = this.get(position);
    found.value = value;
    return this;
  }

  insert(value, position) {
    if (position < 0 || position > this.length) return;
    if (position === this.length) {
      return this.push(value);
    }
    if (position === 0) {
      return this.shift(value)
    }
    const newNode = new Node(value);
    const found = this.get(position);
    newNode.next = found;
    found.prev.next = newNode;
    this.length++;
    return this;
  }
  remove(position) {
    if (position < 0 || position >= this.length) return;
    const removed = this.get(position);
    const prev = removed.prev;
    const next = removed.next;
    prev.next = next;
    next.prev = prev;
    return this;
  }

  /*
   <-p- node -n-> <-p- node -n-> <-p- node -n-> <-p- node -n->
  */
  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;
    while (curr) {
      let former = curr.prev;
      let later = curr.next;
      curr.prev = later;
      curr.next = former;
      curr = later;
    }
    return this;
  }
}

module.exports = DoublyLinkedList;
