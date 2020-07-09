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
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      let curr = queue.shift();
      visited.push(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      curr = curr.left ? curr.left : curr.right;
    }
    return visited;
  }

  depthFirstPreOrderSearch() {
    const values = [];
    function traverse(node) {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return values;
  }

  depthFirstPostOrderSearch() {
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    }
    traverse(this.root);
    return values;
  }

  depthFirstInOrderSearch() {

  }
}


module.exports = { BinarySearchTree, Node };
