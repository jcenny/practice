/*

EX 1:

    2
   / \
  1   3

Output: 1


EX 2:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output: 7

Ex 3

    1
      \
       2

Output: 2

find bottom left tree value
given binary tree

I: tree
O: value -> most left value
C: none
E: tree with no left or right, return value

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7
 
*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const bottomLeftTree = (node) => {
  // transverse through tree, most bottom left value, is the left value with the greatest depth
  // use DFS, stack method
  
  // create stack, result array, depth
  let stack = [];
  let result = [];
  let depth = 0;
  let current;
  // push tree into stack with depth value
  stack.push([node, depth]);
  // as long as stack has length greater than 0
  while (stack.length) {
    // pop off stack
    current = stack.pop();
    // check for right node, push into stack if exist and depth + 1
    if (current[0].right) {
      stack.push([current[0].right, ++depth]);
    }
    // check for left node, push into stack if exist and depth + 1
    if (current[0].left) {
      stack.push([current[0].left, ++depth])
    }
    console.log(stack, 'stack')
    // if right or left does not exist, push into result or replace result depending on depth
    if (!current[0].right && !current[0].left) {
      if (result.length === 0 || result[1] < depth) {
        result = [current[0].val, depth]
      }
    }
  }
  return result[0];
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.right.left = new TreeNode(5);
tree.right.right = new TreeNode(6);
tree.right.left.left = new TreeNode(7);
console.log('7: ', bottomLeftTree(tree));

// function findBottomNode(tree) {
//   // check for left and right of children, 
//   // if no left or right, return value
//   // counter for depth, to determine if that is the most left value
//   // queue left and right nodes, if pushed into queue, pop off current node

//   let queue = [];
//   queue.push(tree); //1
//   let result = {}; // { counter: 2, val: 4 }
//   let counter = 0;
//   while (queue.length > 0) {
//     let current = queue.shift(); // [1]
//     if (current.left) {
//       counter++;
//       queue.push(current.left);
//     }
//     if (current.right) {
//       counter++;
//       queue.push(current.right);
//     }
//     if (!current.left && !current.right) {
//       if (result["counter"] === undefined) { // []
//         result["counter"] = counter;
//         result["value"] = current.val;
//       } else if (result["counter"] < counter) {
//         console.log(result["counter"])
//         result["counter"] = counter;
//         result["value"] = current.val
//       }
//     }
//   }
//   return result["value"];
// }