const isBinarySearchTree = (treeRoot) => {
  /*
  transverse through tree => dfs since we know its a binary tree (2 child max per node), can save space if balanced tree
  not valid if left child is greater than any of its ancestors
  not valid if right chiild is less than any of its ancestors
  create a queue, store node and its upper and lower bounds
  pop off queue, and check if node's value is in between upper and lower bounds, return false if not
  if left child exists, add left child into queue with lowerbound as current val
  if right child exists, add right child into queue with upperbound as current val
  */ 
  
  let queue = [{
    node: treeRoot,
    lower: -Infinity,
    upper: Infinity,
  }];

  while (queue.length) {
    const {node, lower, upper} = queue.pop();
    if (node.val <= lower || node.val >= upper) return false;
    if (node.left) {
      queue.push({
        node: node.left,
        lower,
        upper: node.val,
      })
    }

    if (node.right) {
      queue.push({
        node: node.right,
        lower: node.val,
        upper,
      })
    }
  }

  return true;
}

class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insertLeft(val) {
    const newTree = new BinaryTree(val);
    this.left = newTree;
    return newTree;
  }

  insertRight(val) {
    const newTree = new BinaryTree(val);
    this.right = newTree;
    return newTree;
  }
}

let treeRoot = new BinaryTree(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
console.log('should be true: ', isBinarySearchTree(treeRoot));
treeRoot = new BinaryTree(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
console.log('should be false: ', isBinarySearchTree(treeRoot));
/*
               50
             /   \
            30   80
           /  \  / \
          20 60  70 90

node: 50
lower: -infinity
upper: infinitiy 

node: 30
lower: -infinity
upper: 50

node: 80
lower: 50
upper: -infinity

node: 70
lower: 50
upper: 80

node: 90
lower: 80
upper: infinity

*/
