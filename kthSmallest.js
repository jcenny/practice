const kthSmallest = (root, k) => {
  let result = [];
  
  const transverse = (node) => {
    if (result.length !== k) {
      if (node.left) transverse(node.left);
      if (result.length !== k) {
        result.push(node.val);
      }
      if (node.right) transverse(node.right);
    }
  }

  transverse(root);
  return result.pop();
}

class Tree{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree(3);
tree.left = new Tree(1);
tree.right = new Tree(4);
tree.left.right = new Tree(2);

console.log('should be 1:', kthSmallest(tree, 1))