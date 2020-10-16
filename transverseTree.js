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

  BFS() {
    let queue = [];
    let visited = [];
    let current;
    queue.push(this.root);

    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return visited;
  } 

  DFS_preOrder() {
    let result = [];
    const transverse = (node) => {
      result.push(node.val);
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
    }
    transverse(this.root);
    return result;
  }

  DFS_postOrder() {
    let result = [];
    const transverse = (node) => {
      if (node.left) transverse(node.left);
      if (node.right) transverse(node.right);
      result.push(node.val);
    }
    transverse(this.root);
    return result;
  }

  DFS_inOrder() {
    let result = [];
    const transverse = (node) => {
      if (node.left) transverse(node.left);
      result.push(node.val);
      if (node.right) transverse(node.right);
    }
    transverse(this.root);
    return result;
  }
}

/*
        10
       /  \
      6    15
    /  \     \
   3    8    20
*/
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log('should be [10, 6, 15, 3, 8, 20] for BFS: ', tree.BFS())
console.log('should be [10, 6, 3, 8, 15, 20] for BFS: ', tree.DFS_preOrder())
console.log('should be [3, 8, 6, 20, 15, 10] for BFS: ', tree.DFS_postOrder())
console.log('should be [3, 6, 8, 10, 15, 20] for BFS: ', tree.DFS_inOrder())

