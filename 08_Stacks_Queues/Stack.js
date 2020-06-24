const DoublyLinkedList = require('../07_Linked_Lists/Doubly_Linked_List')

class StackWithArray {
  constructor() {
    this.stack = [];
  }
  enqueue(val) {
    this.stack.push(val);
  }
  dequeue() {
    return this.stack.pop();
  }
}

class StackWithLinkedList {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  enqueue(val) {
    this.list.push(val);
  }
  dequeue() {
    return this.list.pop();
  }
}

module.exports = { StackWithArray, StackWithLinkedList }

