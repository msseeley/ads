const expect = require('chai').expect;
const { BinarySearchTree, Node } = require('../09_Trees/Binary_Search_Tree');

describe("Binary Search Tree", () => {
  describe('contains basic properties and methods', () => {
    const bst = new BinarySearchTree();

    it("has a root", () => {
      expect(bst).to.have.property('root');
    });

    it("contains the following methods: 'insert', 'contains', 'delete', 'breadthFirstSearch', 'depthFirstPreOrderSearch', 'depthFirstPostOrderSearch', 'depthFirstInOrderSearch'", () => {
      expect(bst.insert).to.be.a('function');
      expect(bst.contains).to.be.a('function');
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
      [45, 59, 20, 5, 47, 78, 90, 6, 88].forEach(num => bst.insert(num));
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
    it("throws error when insert value is a duplicate ", () => {
      expect(() => bst.insert(50)).to.throw("value already exists");
    })
  });
  describe("contains method", () => {
    const bst = new BinarySearchTree();
    [12, 2, 1, 5, 19, 25, 17, 6].forEach(num => bst.insert(num));
    it("returns a boolean for values that are or are not in the tree", () => {
      expect(bst.contains(1)).to.equal(true);
      expect(bst.contains(33)).to.equal(false);
    });
  })
})
