/*
Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/


var mergeTwoLists = function(l1, l2) {
  let current;
  let result = new ListNode().next;
  if (!l1) return l2;
  if (!l2) return l1;
  
  while (l1 && l2) {
    if (l1.val > l2.val) {
      if (!current) {
        current = new ListNode(l2.val);
        result = current;
      } else {
        current.next = new ListNode(l2.val);
        current = current.next;
      }
      l2 = l2.next;
    } else {
      if (!current) {
        current = new ListNode(l1.val);
        result = current;
      } else {
        current.next = new ListNode(l1.val);
        current = current.next;
      }
     l1 = l1.next;
    }
  }

  while (l1) {
    current.next = new ListNode(l1.val);
    current = current.next;
    l1 = l1.next;  
  }

  while (l2) {
    current.next = new ListNode(l2.val);
    current = current.next;
    l2 = l2.next;  
  }

  return result;
};
