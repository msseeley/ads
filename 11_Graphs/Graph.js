class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  insertVertex(vertex) {
    //could add in logic to handle duplicates as opposed to over-write them
    this.adjacencyList[vertex] = [];
  };

  insertEdge(v1, v2) {
    console.log(this.adjacencyList)
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
      if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }
  }

}


module.exports = Graph;
