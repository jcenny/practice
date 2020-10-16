class BinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length;
    const element = this.values[0]
    while (true) {
      console.log(idx, 'idx')
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
           (swap === null && rightChild > element) || 
           (swap !== null && rightChild > leftChild)
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

const heap = new BinaryHeap();
console.log('should be [55, 39, 41, 18, 27, 12]', heap.insert(55));
console.log(heap.extractMax())
console.log(heap.values)
console.log(heap.extractMax())
console.log(heap.values)