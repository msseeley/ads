const expect = require('chai').expect;
const BinarySearchTree = require('../09_Trees/Binary_Search_Tree');

describe("Binary Search Tree", () => {
  it("contains a root", () => {
    const bst = new BinarySearchTree();
    expect(bst).to.have.property('root');
  })
})
