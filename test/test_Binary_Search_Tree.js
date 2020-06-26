const expect = require('chai').expect;
const { BinarySearchTree, Node } = require('../09_Trees/Binary_Search_Tree');

describe("Binary Search Tree", () => {
  describe('contains basic properties and methods', () => {
    const bst = new BinarySearchTree();

    it("has a root", () => {
      expect(bst).to.have.property('root');
    });

    it("contains the following methods: 'insert', 'search', 'delete', 'breadthFirstSearch', 'depthFirstPreOrderSearch', 'depthFirstPostOrderSearch', 'depthFirstInOrderSearch'", () => {
      expect(bst.insert).to.be.a('function');
      expect(bst.delete).to.be.a('function');
      expect(bst.breadthFirstSearch).to.be.a('function');
      expect(bst.depthFirstPreOrderSearch).to.be.a('function');
      expect(bst.depthFirstPostOrderSearch).to.be.a('function');
      expect(bst.depthFirstInOrderSearch).to.be.a('function');
    });

    it("has nodes which possess the following properties: 'value', 'left', 'right'", () => {
      const node = new Node();
      expect(node).to.have.property('value');
      expect(node).to.have.property('left');
      expect(node).to.have.property('right');
    });

  })
})
