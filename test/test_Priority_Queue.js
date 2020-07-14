const { expect } = require('chai');
const { PriorityQueue } = require('../09_Trees/Priority_Queue');

describe.only('Priority Queue', () => {
  it("enqueue nodes based on priority with the highest priority at the root and the lowest at the bottom (lower priority numbers are higher priority value", () => {
    const pQueue = new PriorityQueue();
    pQueue.enqueue("")
  });
  it("removes nodes and appropriately organizes the queue to maintain priority order", () => {
    const pQueue = new PriorityQueue();
    pQueue.enqueue("James", 2);
    expect(pQueue.peek().data).to.equal("James");
    pQueue.enqueue("Mina", 3);
    pQueue.enqueue("Ruti", 1);
    pQueue.enqueue("Oliver", 7);
    expect(pQueue.peek().data).to.equal("Ruti");
    expect(pQueue.values).to.deep.eql([{ data: "Ruti", priority: 1 }, { data: "James", priority: 2 }, { data: "Mina", priority: 3 }, { data: "Oliver", priority: 7 }])
  });
})
