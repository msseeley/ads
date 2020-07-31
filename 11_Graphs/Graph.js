class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  insertVertex(vertex) {
    this.adjacencyList[vertex] = [];
    return this;
  };
}


module.exports = Graph;
