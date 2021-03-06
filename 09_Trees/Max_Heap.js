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

  findLeftChildIdx(idx) {
    return (2 * idx) + 1;
  }

  findRightChildIdx(idx) {
    return (2 * idx) + 2;
  }

  swap(idxA, idxB) {
    let valueA = this.values[idxA];
    this.values[idxA] = this.values[idxB];
    this.values[idxB] = valueA;
  }

  insert(value) {
    this.values.push(value);
    let idx = this.values.length - 1;
    let parentIdx = this.findParentIdx(idx);
    //why does this not try to swap with negative idxed parent?
    while (this.values[parentIdx] < value) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.findParentIdx(idx);
    }
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return;
    if (this.values.length === 1) return this.values.pop();
    this.swap(0, this.values.length - 1);
    const max = this.values.pop();
    let idx = 0;
    let leftChildIdx = this.findLeftChildIdx(idx);
    let rightChildIdx = this.findRightChildIdx(idx);
    while (this.values[idx] < this.values[leftChildIdx] || this.values[idx] < this.values[rightChildIdx]) {
      const leftChildVal = this.values[leftChildIdx];
      const rightChildVal = this.values[rightChildIdx];
      const direction = leftChildVal > rightChildVal ? 'left' : 'right';
      leftChildVal > rightChildVal ? this.swap(leftChildIdx, idx) : this.swap(rightChildIdx, idx);
      idx = direction === 'left' ? this.findLeftChildIdx(idx) : this.findRightChildIdx(idx);
      leftChildIdx = this.findLeftChildIdx(idx);
      rightChildIdx = this.findRightChildIdx(idx);
    }
    return max;
  }
}

module.exports = MaxHeap;
