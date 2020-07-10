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

  find(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return current;
      let dir = current.value > value ? 'left' : 'right';
      current = current[dir];
    }
    throw Error("Node does not exist");
  }

  parent(node) {
    let current = this.root;
    if (current === node) return false;
    while (current) {
      if (current.left === node || current.right === node) return current;
      let dir = current.value > node.value ? 'left' : 'right';
      current = current[dir];
    }
  }

  min(node) {
    if (!node.left) return node;
    let current = node.left;
    while (current) {
      if (current.left) current = current.left;
      else break;
    }
    return current;
  }

  max(node) {
    if (!node.right) return node;
    let current = node.right;
    while (current) {
      if (current.right) current = current.right;
      else break;
    }
    return current;
  }

  delete(value) {
    const toRemove = this.find(value);
    const parent = this.parent(toRemove);
    const parentPointer = parent && parent.value > toRemove.value ? 'left' : 'right';
    if (parent && !toRemove.left && !toRemove.right) {
      parent[parentPointer] = null;
    }
    else if (!parent && !toRemove.left && !toRemove.right) {
      this.root = null;
    }
    else if (!parent) {
      const newRoot = this.root.left ? this.max(this.root.left) : this.min(this.root.right);
      const newRootParent = this.parent(newRoot);
      const newRootParentPointer = newRootParent.value > newRoot.value ? 'left' : 'right';
      if (!newRoot.left && !newRoot.right) {
        newRootParent[newRootParentPointer] = null;
      }
      else {
        const child = newRoot.left ? newRoot.left : newRoot.right;
        const newRootPointer = newRoot.left ? 'left' : 'right';
        newRootParent[newRootParentPointer] = child;
        newRoot[newRootPointer] = null;
      }
      newRoot.left = toRemove.left;
      newRoot.right = toRemove.right;
      this.root = newRoot;
      toRemove.left = null;
      toRemove.right = null;
    }
    else {
      const childCount = toRemove.left && toRemove.right ? 2 : 1;
      if (childCount === 1) {
        const child = toRemove.left ? toRemove.left : toRemove.right;
        const toRemoveChildPointer = toRemove.left ? 'left' : 'right';
        parent[parentPointer] = child;
        toRemove[toRemoveChildPointer] = null;
      }
      else {
        const replacement = this.min(toRemove.right);
        const replacementParent = this.parent(replacement);
        replacementParent.left = replacement.right ? replacement.right : null;
        replacement.left = toRemove.left;
        replacement.right = toRemove.right;
        parent[parentPointer] = replacement;
        toRemove.left = null;
        toRemove.right = null;
      }
    }
    return this;
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
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return values;
  }
}


module.exports = { BinarySearchTree, Node };
