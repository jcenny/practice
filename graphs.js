class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex])
    this.adjacenyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacenyList[v1] && this.adjacenyList[v2]) {
      this.adjacenyList[v1].push(v2);
      this.adjacenyList[v2].push(v1)
    }
  }

  removeEdge(v1, v2) {
    this.adjacenyList[v1] = this.adjacenyList[v1].filter((v) => {
      v !== v2;
    });
    this.adjacenyList[v2] = this.adjacenyList[v2].filter((v) => {
      v !== v1;
    })
  }

  removeVertex(vertex) {
    this.adjacenyList[vertex].forEach((adjacentVertex) => {
      this.removeEdge(vertex, adjacentVertex);
    });
    delete this.adjacenyList[vertex];
  }

  DFS_recursive(start) {
    let result = [];
    let visited = {};
    const adjacenyList = this.adjacenyList;
    const dfs = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacenyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      })
    }
    dfs(start);
    return result;
  }

  DFS_iterative(start) {
    let result = [];
    let visited = {};
    let stack = [];
    let current;
    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      current = stack.pop();
      result.push(current);
      this.adjacenyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  BFS(start) {
    let result = [];
    let visited = {};
    let queue = [];
    queue.push(start);
    visited[start] = true;
    let current;
    while (queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjacenyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFS_iterative("A"));
console.log(g.DFS_recursive("A"));
console.log(g.BFS("A"));