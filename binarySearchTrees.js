class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const tree = new Node(val);
    if (!this.root) {
      this.root = tree;
    } else {
      let prev = this.root;
      let current = this.root;
      let direction;
      while (current !== null) {
        if (current.val < val) {
          prev = current;
          current = current.right;
          direction = 'right';
        } else {
          prev = current;
          current = current.left;
          direction = 'left';
        }
      }
      prev[direction] = tree;
    }
    return this;
  }

  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current !== null) {
      if (current.val < val) {
        current = current.right;
      } else if (current.val > val) {
        current = current.left;
      } else {
        return current;
      }
    }
    return undefined;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);

