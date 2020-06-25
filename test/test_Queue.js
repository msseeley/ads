const expect = require('chai').expect;
const { QueueWithArray, Queue } = require('../08_Stacks_Queues/Queue')

describe("Queue", () => {
  describe('Array Implmentation', () => {
    const arrayQueue = new QueueWithArray();

    it("has the methods: 'enqueue' and 'dequeue", () => {
      expect(arrayQueue.enqueue).to.be.a('function');
      expect(arrayQueue.dequeue).to.be.a('function');
    });

    it("enqueues and dequeues data in FIFO manner", () => {
      arrayQueue.enqueue(1);
      expect(arrayQueue.queue.length).to.equal(1);
      expect(arrayQueue.dequeue()).to.equal(1);
      arrayQueue.enqueue(2);
      arrayQueue.enqueue(3);
      arrayQueue.enqueue(4);
      expect(arrayQueue.dequeue()).to.equal(2);
      expect(arrayQueue.dequeue()).to.equal(3);
      expect(arrayQueue.dequeue()).to.equal(4);
    });
    it("returns undefined when the queue is empty", () => {
      expect(arrayQueue.dequeue()).to.equal(undefined);
    });
  });

  describe('Queue Class Implmentation', () => {
    const arrayQueue = new Queue();

    it("has the methods: 'enqueue' and 'dequeue", () => {
      expect(arrayQueue.enqueue).to.be.a('function');
      expect(arrayQueue.dequeue).to.be.a('function');
    });

    it("can adds and retrieves data in FIFO manner", () => {
      arrayQueue.enqueue(1);
      expect(arrayQueue.length).to.equal(1);
      const node = arrayQueue.dequeue();
      expect(node.val).to.equal(1);
      expect(node.next).to.equal(null);
      arrayQueue.enqueue(2);
      arrayQueue.enqueue(3);
      arrayQueue.enqueue(4);
      expect(arrayQueue.dequeue().val).to.equal(2);
      expect(arrayQueue.dequeue().val).to.equal(3);
      expect(arrayQueue.dequeue().val).to.equal(4);
    });
    it("returns undefined when the queue is empty", () => {
      expect(arrayQueue.dequeue()).to.equal(undefined);
    });
  });
});
