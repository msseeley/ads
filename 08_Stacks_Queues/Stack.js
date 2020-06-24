class StackWithArray {
  constructor() {
    this.stack = [];
    this.length = 0;
  }
  enqueue(val) {
    this.stack.push(val);
    this.length++;
  }
  dequeue() {
    this.length--;
    return this.stack.pop();
  }
}

module.exports = { StackWithArray }

