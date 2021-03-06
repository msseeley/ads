const { expect } = require('chai');
const MaxHeap = require('../09_Trees/Max_Heap');

describe("Max Heap", () => {
  it("inserts values so that parents are greater than children", () => {
    const heap = new MaxHeap();
    [12, 14, 2, 50, 8, 10, 36, 42].forEach(val => heap.insert(val));
    expect(heap.values).to.eql([50, 42, 36, 14, 8, 2, 10, 12]);
    expect(heap.values[1]).to.be.above(heap.values[3]);
    expect(heap.values[1]).to.be.above(heap.values[4]);
    expect(heap.values[0]).to.be.above(heap.values[1]);
    expect(heap.values[0]).to.be.above(heap.values[2]);
    expect(heap.values[3]).to.be.above(heap.values[7]);
    expect(heap.values[3]).to.be.above(heap.values[7]);
  });
  it("inserts values filling the left side first", () => {
    const heap = new MaxHeap();
    [69, 15, 12].forEach(val => heap.insert(val));
    expect(heap.values[0]).to.equal(69);
    expect(heap.values[1]).to.equal(15);
    heap.insert(8);
    expect(heap.values.indexOf(8)).to.equal((2 * 1) + 1);
  });
  it("maintains the root node as the maximum value", () => {
    const heap = new MaxHeap();
    heap.insert(20);
    expect(heap.values[0]).to.equal(20);
    heap.insert(50);
    expect(heap.values[0]).to.equal(50);
    heap.insert(17);
    expect(heap.values[0]).to.equal(50);
    heap.insert(30);
    expect(heap.values[0]).to.equal(50);
    heap.insert(123);
    expect(heap.values[0]).to.equal(123);
  });
  it("returns the max value while maintaining proper heap structure", () => {
    const heap = new MaxHeap();
    [2, 78, 34, 73, 20, 90, 14, 35].forEach(val => heap.insert(val));
    expect(heap.extractMax()).to.equal(90);
    expect(heap.values).to.eql([78, 73, 34, 35, 20, 2, 14]);
    expect(heap.extractMax()).to.equal(78);
    expect(heap.values).to.eql([73, 35, 34, 14, 20, 2]);
  })
})
