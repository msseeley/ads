const { expect } = require('chai');
const Graph = require('../11_Graphs/Graph');


describe.only("Undirected Graph", () => {
  it("Inserts a Vertex", () => {
    //could add a test for dealing with duplicate insertions
    const graph = new Graph();
    expect(graph.adjacencyList).to.eql({});
    graph.insertVertex('A');
    expect(graph.adjacencyList).to.eql({ 'A': [] });
  });
  it("Inserts an Edge", () => {
    //could add a test for dealing with duplicate insertions
    const graph = new Graph();
    graph.insertVertex('A');
    graph.insertVertex('B');
    graph.insertEdge('A', 'B');
    expect(graph.adjacencyList).to.eql({ 'A': ['B'], 'B': ['A'] });
  });
  it("Removes an Edge", () => {
    const graph = new Graph();
    graph.insertVertex('A');
    graph.insertVertex('B');
    graph.insertVertex('C');
    graph.insertEdge('A', 'B');
    graph.insertEdge('B', 'C');
    graph.removeEdge('B', 'C');
    expect(graph.adjacencyList).to.eql({ 'A': ['B'], 'B': ['A'], 'C': [] });
  });

  it("Removes a Vertex", () => {
    const graph = new Graph();
    graph.insertVertex('C');
    graph.insertVertex('D');
    graph.insertVertex('E');
    graph.insertVertex('F');
    graph.insertVertex('G');
    graph.insertEdge('C', 'D');
    graph.insertEdge('D', 'E');
    graph.insertEdge('E', 'F');
    graph.insertEdge('F', 'G');
    graph.insertEdge('G', 'C');
    graph.removeVertex('C')
    expect(graph.adjacencyList).to.eql({
      'D': ['E'],
      'E': ['D', 'F'],
      'F': ['E', 'G'],
      'G': ['F']
    });
  });
});
