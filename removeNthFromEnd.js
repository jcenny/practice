/*
 Definition for singly-linked list.
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
 }

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

more than one pass:
start from head, go through list all the way to tail keeping track of the length
take the length - n to find previous
start from head again until target is found, remove by setting previous next to be targets next

one pass:
one pointer at head, one pointer at n from head,
increment together until 
n from head reaches tail, first pointer would then be at the node you want to remove
*/

var removeNthFromEnd = function(head, n) {
  /*
  n = 2
  1 -> 2 -> 3 -> 4 -> 5
       i
            j
  */
  if (head.next === null) {
    head.val = 0;
    return head;
  }
  let prev = head;
  let tracker = 0;
  let end = head;

  while (tracker !== n) {
    tracker++;
    end = end.next;
  }

  while (end.next !== null) {
    prev = prev.next;
    end = end.next;
  }

  let remove = prev.next;
  prev.next = remove.next;
  remove.next = null;
  return head;
};

var multiplePasses = function(head, n) {
  if (head.next === null && n === 1) {
    head.val = 0;
    return head;
  } 
  let length = 1;
  let current = head;
  
  while (current.next !== null) {
    length++;
    current = current.next;
  }
  let prev = length - n;

  let count = 1;
  let node = head;
  while (count !== prev) {
    node = node.next;
    count++;
  }
  let target = node.next;
  node.next = target.next;
  return head;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
console.log('should be 1 -> 2 -> 3 -> 5: ', multiplePasses(list, 2));
console.log('should be: ', multiplePasses(new Node(1), 1));
// console.log('should be 1 -> 2 -> 3 -> 5: ', removeNthFromEnd(list));