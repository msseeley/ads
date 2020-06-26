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
        if (curr.value === value) throw Error("value already exists");
        dir = curr.value > value ? 'left' : 'right';
        if (curr[dir]) curr = curr[dir];
        else break;
      }
      curr[dir] = new Node(value)
    }
    return this;
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      let dir = current.value > value ? 'left' : 'right';
      current = current[dir];
    }
    return false;
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
