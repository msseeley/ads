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
  shift() {
    if (this.head === null) return;
    if (this.head === this.tail) this.tail = null;
    const shifted = this.head;
    this.head = this.head.next;
    this.length--;
    return shifted;
  }
  unshift(value) {
    const node = new Node(value);
    if (!this.head) this.tail = node;
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  //0 indexed
  get(position) {
    if (position > this.length - 1 || position < 0) return;
    let currPosition = 0;
    let currNode = this.head;
    while (currPosition < position) {
      currNode = currNode.next;
      currPosition++;
    }
    return currNode;
  }

}


const list = new SinglelyLinkedList();

