class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let prev = this.head;
    let next = this.head.next;
    while (next.next) {
      prev = next;
      next = prev.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return next;
  }
  
  shift() {
    if (!this.head) return undefined;
    const prev = this.head;
    this.head = prev.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return prev;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return null;
    }
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const prevNode = this.get(index - 1);
    const next = prevNode.next;
    const newNode = new Node(val);
    prevNode.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }
  
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prev = this.get(index - 1);
    const remove = prev.next;
    prev.next = remove.next;
    this.length--;
    return remove;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let current;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      current = node.next;
      node.next = prev;
      prev = node;
      node = current;
    }
    return this;
  }
}

const link = new LinkedList();
link.push('hello')
link.push('goodbye');
console.log(link)
console.log('reverse', link.reverse());
// console.log('insert at start', link.insert('hi', 0));
// console.log('insert at non-existing index', link.insert('no', 5))
