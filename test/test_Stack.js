const expect = require('chai').expect;
const { StackWithArray, StackWithLinkedList } = require('../08_Stacks_Queues/Stack');

describe.only("Stack", () => {
  describe("Array Implmentation", () => {
    const stack = new StackWithArray();

    it("has methods: 'enqueue' and 'dequeue'", () => {
      expect(stack.enqueue).to.be.a('function');
      expect(stack.dequeue).to.be.a('function');
    });

    it("can enqueue values", () => {
      stack.enqueue('A');
      expect(stack.dequeue()).to.equal('A')
      stack.enqueue('B');
      stack.enqueue('C');
      expect(stack.dequeue()).to.equal('C');
    });

    it("return the last element added when dequeuing", () => {
      expect(stack.dequeue()).to.equal('B');
    });
  });

  describe("Linked List Implementation", () => {
    const stack = new StackWithLinkedList();

    it("has methods: 'enqueue' and 'dequeue'", () => {
      expect(stack.enqueue).to.be.a('function');
      expect(stack.dequeue).to.be.a('function');
    });

    it("can enqueue values", () => {
      stack.enqueue('A');
      expect(stack.dequeue().value).to.equal('A')
      stack.enqueue('B');
      stack.enqueue('C');
      expect(stack.dequeue().value).to.equal('C');
    });

    it("return the last element added when dequeuing", () => {
      expect(stack.dequeue().value).to.equal('B');
    });
  });
});
