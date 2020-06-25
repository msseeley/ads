class QueueWithArray {
  constructor() {
    this.queue = [];
  }
  enqueue(val) {
    this.queue.push(val);
    return this.queue.length;
  }

  dequeue() {
    return this.queue.shift();
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

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this.length;
  }

  dequeue() {
    const removed = this.first;
    this.first = this.first.next;
    this.length--;
    removed.next = null;
    return removed;
  }
}

module.exports = { QueueWithArray, Queue };
