
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
      swap(parentIdx, idx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }

  peek() {
    return this.values[0].data;
  }



}


module.exports = { PriorityQueue, DataNode };
