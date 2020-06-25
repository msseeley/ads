const DoublyLinkedList = require('../07_Linked_Lists/Doubly_Linked_List')

class StackWithArray {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val);
  }
  pop() {
    return this.stack.pop();
  }
}

class StackWithLinkedList {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  push(val) {
    this.list.push(val);
  }
  pop() {
    return this.list.pop();
  }
}

module.exports = { StackWithArray, StackWithLinkedList }

