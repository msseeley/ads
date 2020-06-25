const expect = require('chai').expect;
const { StackWithArray, StackWithLinkedList } = require('../08_Stacks_Queues/Stack');

describe("Stack", () => {
  describe("Array Implmentation", () => {
    const stack = new StackWithArray();

    it("has methods: 'push' and 'pop'", () => {
      expect(stack.push).to.be.a('function');
      expect(stack.pop).to.be.a('function');
    });

    it("can push values", () => {
      stack.push('A');
      expect(stack.pop()).to.equal('A')
      stack.push('B');
      stack.push('C');
      expect(stack.pop()).to.equal('C');
    });

    it("return the last element added when dequeuing", () => {
      expect(stack.pop()).to.equal('B');
    });
  });

  describe("Linked List Implementation", () => {
    const stack = new StackWithLinkedList();

    it("has methods: 'push' and 'pop'", () => {
      expect(stack.push).to.be.a('function');
      expect(stack.pop).to.be.a('function');
    });

    it("can push values", () => {
      stack.push('A');
      expect(stack.pop().value).to.equal('A')
      stack.push('B');
      stack.push('C');
      expect(stack.pop().value).to.equal('C');
    });

    it("return the last element added when dequeuing", () => {
      expect(stack.pop().value).to.equal('B');
    });
  });
});
