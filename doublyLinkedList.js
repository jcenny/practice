class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const oldTail = this.tail;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null; 
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    const mid = Math.floor((this.length - 1) / 2);
    if (index <= mid) {
      return this.getFromHead(index);
    } else {
      return this.getFromTail(index);
    }
  }

  getFromHead(index) {
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  getFromTail(index) {
    let count = this.length - 1;
    let current = this.tail;
    while (count !== index) {
      current = current.prev;
      count--;
    }
    return current;
  }

  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(value, index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    newNode.next = prev.next;
    newNode.prev = prev;
    prev.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length -1) return !!this.pop();

    let removeNode = this.get(index);
    let prev = removeNode.prev;
    let next = removeNode.next;
    prev.next = next;
    next.prev = prev;
    removeNode.prev = null;
    removeNode.next = null;
    this.length--;
    return removeNode
  }

  reverse() {
    /*
    1 <=> 2 <=> 3 <=> 4 <=> 5
    5 <=> 4 <=> 3 <=> 2 <=> 1
    */
   // switch heads and tails
   let current = this.head; 
   this.head = this.tail;
   this.tail = current;
   let temp = null;
   // loop through and reassign current to be current.next 
   // (equivalent to current.prev because we swapped) 
   // break when current hit null because we've hit the tail 
    while (current) {
      // keep track of a temp so that we can swap previous and next values
      temp = current.prev;
      current.prev = current.next; 
      current.next = temp;  
      current = current.prev; 
    }
    return this;
  }
}

const link = new DoublyLinkedList();
link.push(1)
link.push(2)
link.push(3)
link.push(4)
console.log(link.reverse())
console.log(link.get(3))
