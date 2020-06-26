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
  });
  describe("insert method", () => {
    const bst = new BinarySearchTree();
    it("inserts the first node at the root of the tree", () => {
      bst.insert(50);
      expect(bst.root.value).to.equal(50);
      expect(bst.root.left).to.equal(null);
      expect(bst.root.right).to.equal(null);
    });
    it("inserts subsequent nodes in the appropriate order", () => {
      bst.insert(45);
      bst.insert(59);
      bst.insert(20);
      bst.insert(5);
      bst.insert(47);
      bst.insert(78);
      bst.insert(90);
      bst.insert(6);
      bst.insert(88);
      expect(bst.root.left.value).to.equal(45);
      expect(bst.root.left.right.value).to.equal(47);
      expect(bst.root.left.left.value).to.equal(20);
      expect(bst.root.left.left.left.value).to.equal(5);
      expect(bst.root.left.left.left.right.value).to.equal(6);
      expect(bst.root.right.value).to.equal(59);
      expect(bst.root.right.right.value).to.equal(78);
      expect(bst.root.right.right.right.value).to.equal(90);
      expect(bst.root.right.right.right.left.value).to.equal(88);
    });
  });
})
