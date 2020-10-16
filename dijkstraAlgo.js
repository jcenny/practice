class WeightedGraph {
  constructor() {
    this.adjacenyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacenyList[v1].push({node: v2, weight});
    this.adjacenyList[v2].push({node: v1, weight});
  }
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
