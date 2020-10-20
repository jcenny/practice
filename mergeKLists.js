/*
Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
@param {ListNode[]} lists
@return {ListNode}

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Input: lists = []
Output: []

Input: lists = [[]]
Output: []
*/
var mergeKLists = function(lists) {
  let list;
  for (let i = 0; i < lists.length; i++) {
    list = lists[i];
  }
};

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor(idx - 1 / 2);
      let parent = this.values[parentIdx];
      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  
  remove() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleDown() {
    let idx = 0;
    const element = this.values[idx];
    const length = this.values.length;
    let swap = null;
    while(true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      if (leftIdx < this.length) {
        let leftChild = this.values[leftIdx];
        if (leftChild < element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < this.length) {
        let rightChild = this.values[rightIdx];
        if (swap === null && rightChild < element || swap !== null && rightChild < leftChild) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.values[swap] = element;
      this.values[idx] = this.values[swap];
      idx = swap;
    }
  }
}