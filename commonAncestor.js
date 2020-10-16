
/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 6 and 8 have a common ancestor of 4.

         14  13
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

parentChildPairs1 = [
    (1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
    (4, 8), (4, 9), (9, 11), (14, 4), (13, 12), (12, 9)
]

{
 3: [1,2],
 6: [3, 5]
 7: [5]
 5: [4]
 8: [4]
 9: [4, 12]
 11: [9]
 4: [14]
 12: [13]
}


Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(parentChildPairs1, 3, 8) => false
hasCommonAncestor(parentChildPairs1, 5, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 9) => true
hasCommonAncestor(parentChildPairs1, 1, 3) => false
hasCommonAncestor(parentChildPairs1, 7, 11) => true
hasCommonAncestor(parentChildPairs1, 6, 5) => true
hasCommonAncestor(parentChildPairs1, 5, 6) => true

Additional example: In this diagram, 4 and 12 have a common ancestor of 11.

        11
       /  \
      10   12
     /  \
1   2    5
 \ /    / \
  3    6   7
   \        \
    4        8
parentChildPairs2 = [
    (11, 10), (11, 12), (10, 2), (10, 5), (1, 3),
    (2, 3), (3, 4), (5, 6), (5, 7), (7, 8),
]

hasCommonAncestor(parentChildPairs2, 4, 12) => true
hasCommonAncestor(parentChildPairs2, 1, 6) => false
hasCommonAncestor(parentChildPairs2, 1, 12) => false

n: number of pairs in the input

*/


const collections = (arr) => {
  let parents = {};
  let children = {};
  for (let i = 0; i < arr.length; i++) {
    let [parent, child] = arr[i];
    parents[parent] = true;
    if (!children[child]) {
      children[child] = 1
    } else {
      children[child]++;
    }
  }
  
  for (let j = 0; j < arr.length; j++) {
    let child = arr[j][1];
    if (parents[child]) {
      delete parents[child]
    }
  }
  
  let zeroParent = [];
  for (var key in parents) {
    zeroParent.push(Number(key));
  }

  let oneParent = [];
  for (var child in children) {
    if (children[child] === 1) {
      oneParent.push(Number(child));
    }
  }
  
  return [zeroParent, oneParent];
}




const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];

// console.log('should be [[1, 2, 4],[5, 7, 8, 9, 11]]', collections(parentChildPairs))



//problem 2
const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

const parentChildPairs2 = [
    [11, 10], [11, 12], [2, 3], [10, 2], [10, 5],
    [1, 3], [3, 4], [5, 6], [5, 7], [7, 8]
];

const commonAncestor = (arr, one, two) => {
  let tree = {};
  for (let i = 0; i < arr.length; i++) {
    let [parent, child] = arr[i];
    if (!tree[child]) {
      tree[child] = [parent];
    } else {
      tree[child].push(parent);
    }
  }
  
  let parents = new Set();
  let size;
  
  const checkParent = (arr) => {
    if (!arr) return false
    for (let i = 0; i < arr.length; i++) {
      let eachParent = arr[i];
      size = parents.size;
      parents.add(eachParent);
      if (size + 1 !== parents.size) {
        return true;
      } 
      if (tree[eachParent]) {
        if (checkParent(tree[eachParent])) return true;
      }
    }
  }
  let first = checkParent(tree[one]);
  let second = checkParent(tree[two])
  if (first || second) return true;
  return false;
}

console.log('should be false: ', commonAncestor(parentChildPairs1, 3, 8))
console.log('should be true: ', commonAncestor(parentChildPairs1, 5, 8))
console.log('should be true: ', commonAncestor(parentChildPairs1, 6, 8))
console.log('should be true: ', commonAncestor(parentChildPairs1, 6, 9))
console.log('should be false: ', commonAncestor(parentChildPairs1, 1, 3))
console.log('should be true: ', commonAncestor(parentChildPairs1, 7, 11))
console.log('should be true: ', commonAncestor(parentChildPairs1, 6, 5))
console.log('should be true: ', commonAncestor(parentChildPairs1, 5, 6))


console.log('should be true: ', commonAncestor(parentChildPairs2, 4, 12))
console.log('should be false: ', commonAncestor(parentChildPairs2, 1, 6))
console.log('should be false: ', commonAncestor(parentChildPairs2, 1, 12))
