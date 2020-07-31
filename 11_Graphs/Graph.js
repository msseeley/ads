class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  insertVertex(vertex) {
    //could add in logic to handle duplicates as opposed to over-write them
    this.adjacencyList[vertex] = [];
  };

  insertEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
      if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }
  }

  _swap(idxA, idxB, array) {
    const a = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = a;
  }

  removeEdge(v1, v2) {
    const vertex1 = this.adjacencyList[v1];
    const vertex2 = this.adjacencyList[v2];
    const removedIdx1 = vertex1.indexOf(v2);
    const removedIdx2 = vertex2.indexOf(v1);
    if (vertex1.length - 1 !== removedIdx1) this._swap(vertex1.length - 1, removedIdx1, vertex1);
    if (vertex2.length - 1 !== removedIdx2) this._swap(vertex2.length - 1, removedIdx2, vertex2);
    vertex1.pop();
    vertex2.pop();
  }

  removeVertex(vertex) {
    const edges = [...this.adjacencyList[vertex]];
    edges.forEach(edge => this.removeEdge(edge, vertex));
    delete this.adjacencyList[vertex];
  }
}


module.exports = Graph;
