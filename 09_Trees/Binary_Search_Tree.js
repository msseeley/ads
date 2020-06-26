class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    else {
      let curr = this.root;
      let dir;
      while (curr) {
        dir = curr.value > value ? 'left' : 'right';
        if (curr[dir]) curr = curr[dir];
        else break;
      }
      curr[dir] = new Node(value)
    }
    return this;
  }

  find() {

  }

  delete() {

  }

  breadthFirstSearch() {

  }

  depthFirstPreOrderSearch() {

  }

  depthFirstPostOrderSearch() {

  }

  depthFirstInOrderSearch() {

  }
}


module.exports = { BinarySearchTree, Node };
