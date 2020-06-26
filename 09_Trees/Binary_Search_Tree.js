class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // this.root = null;
  }

  insert(value, curr = this.root) {
    // if (!curr) curr = new Node(value);
    // let dir = curr.value > value ? 'left' : 'right';
    // curr = this.insert(value, curr[dir]);
  }
}


module.exports = BinarySearchTree;
