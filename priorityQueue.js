class Node {
  constructor(val, priority){
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (idx < length) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority < element.priority) {
          swap = leftIdx;
        }       
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightIdx;
          }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let priority = new PriorityQueue();
priority.enqueue('common cold', 5);
priority.enqueue('gunshot', 1);
priority.enqueue('high fever', 4);
priority.enqueue('broken arm', 2);
priority.enqueue('glass in foot', 3);
console.log(priority.dequeue());
console.log(priority.values);