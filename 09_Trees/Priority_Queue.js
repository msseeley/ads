
class DataNode {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(idxA, idxB) {
    const valA = this.values[idxA];
    this.values[idxA] = this.values[idxB];
    this.values[idxB] = valA;
  }

  enqueue(data, priority) {
    const node = new DataNode(data, priority);
    this.values.push(node);
    let idx = this.values.length - 1
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = this.values[parentIdx];
    while (idx > 0 && parent.priority > node.priority) {
      this.swap(parentIdx, idx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
      parent = this.values[parentIdx];
    }
    return this;
  }

  peek() {
    return this.values[0];
  }

  dequeue() {
    this.swap(0, this.values.length - 1);
    const dequeued = this.values.pop();
    let idx = 0;
    let leftChildIdx = (2 * idx) + 1;
    let rightChildIdx = (2 * idx) + 2;
    while (((this.values[leftChildIdx] && this.values[idx].priority > this.values[leftChildIdx].priority) || (this.values[rightChildIdx] && this.values[idx].priority > this.values[rightChildIdx].priority))) {
      if (this.values[leftChildIdx].priority < this.values[rightChildIdx].priority) {
        this.swap(idx, leftChildIdx);
        idx = leftChildIdx;
      } else {
        this.swap(idx, rightChildIdx);
        idx = rightChildIdx;
      }
      leftChildIdx = (2 * idx) + 1;
      rightChildIdx = (2 * idx) + 2;
    }
    return dequeued;
  }
}


module.exports = { PriorityQueue, DataNode };
