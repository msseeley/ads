class QueueWithArray {
  constructor() {
    this.queue = [];
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }
}

module.exports = { QueueWithArray, Queue };
