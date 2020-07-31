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
    expect(graph.adjacencyList).to.eql({ A: ['B'], B: ['A'] });
  });
  xit("Removes a Vertex", () => { });
  xit("Removes an Edge", () => { });
});
