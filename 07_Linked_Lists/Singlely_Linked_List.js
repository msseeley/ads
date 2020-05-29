class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglelyLinkedList {
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
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    };
    let iterations = this.length;
    let node = this.head;
    while (iterations > 2) {
      node = node.next;
      iterations--;
    }
    const removed = node.next;
    this.tail = node;
    this.tail.next = null;
    this.length--;
    return removed;
  }
}


