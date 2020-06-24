const expect = require('chai').expect;
const { StackWithArray } = require('../08_Stacks_Queues/Stack');

describe.only("Stack", () => {
  describe("Array Implmentation", () => {
    const stack = new StackWithArray();

    it("can enqueue values", () => {
      stack.enqueue('A');
      stack.enqueue('B');
      stack.enqueue('C');
      expect(stack.length).to.equal(3);
      expect(stack.stack).to.eql(['A', 'B', 'C']);
    });

    it("return the last element added when dequeuing", () => {
      expect(stack.dequeue()).to.equal('C');
    });

    it("can keep track its length", () => {
      expect(stack.length).to.equal(2);
    })
  })
})
