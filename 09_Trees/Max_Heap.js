//n = index in array;
//left child = 2n+1;
//right child = 2n+2;
//parent = Math.floor(n-1)/2;


class MaxHeap {
  constructor() {
    this.values = [];
  }
  //helper functions
  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  swap(childIdx, parentIdx) {
    let child = this.values[childIdx];
    this.values[childIdx] = this.values[parentIdx];
    this.values[parentIdx] = child;
  }

  insert(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.values[parentIdx] < value) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this.values;
  }
}

module.exports = MaxHeap;
