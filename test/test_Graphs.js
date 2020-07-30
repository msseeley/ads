const { expect } = require('chai');
const Graph = require('../11_Graphs/Graph');


describe.only("Graph", () => {
  it("Inserts a Vertex", () => {
    const graph = new Graph();
    expect(graph.adjacencyList).to.eql({});
    graph.insertVertex('A');
    expect(graph.adjacencyList).to.eql({ 'A': [] });
  });
  it("Inserts an Edge", () => { });
  it("Removes a Vertex", () => { });
  it("Removes an Edge", () => { });
});
