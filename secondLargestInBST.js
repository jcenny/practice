/*
               50
             /   \
            30   80
           /  \  / 
          20 40  70*

              50
             /   \
            30   80*
           /  \  / \
          20 40  70 90

              50*
             /   \
            30   80
           /  \  
          20 40  
second largest => is the largest's left child or parent

to find largest => most right value
*/
const findLargest = (rootNode) => {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.val;
    current = current.right;
  }
}

const findSecondLargest = (rootNode) => {
  if (!rootNode || (!rootNode.left && !rootNode.right)) return null;
  let current = rootNode;

  while (current) {
    // current is largest and has left child => left child's rightest value is 2nd largest
    if (current.left && !current.right) {
      return findLargest(current.left)
    }
    // current is parent of largest, if largest has no children => parent of current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.val;
    }
    current = current.right;
  }
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
console.log('should be 80: ', findSecondLargest(treeRoot));
treeRoot = new BinaryTree(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
console.log('should be 70: ', findSecondLargest(treeRoot));