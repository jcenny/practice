class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const next = this.first;
      this.first = newNode;
      this.first.next = next;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.last = null;
    } 
    const remove = this.first;
    this.first = this.first.next;
    this.size--;
    return remove.val;
  }
}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.size === 1) {
      this.last = null;
    }
    const remove = this.first;
    this.first = this.first.next;
    this.size--;
    return remove.val;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());