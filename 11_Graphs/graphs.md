# Graphs

## What is a Graph?
Graphs are a data structure that consists of a finite set of **nodes (or vertices)** and a set of **edges (pointers)** connecting them.

A **pair** (x,y) is a set of vertices that are context by and edge.

Graphs can be ordered or unordered.

## Uses
- Social Networks
- Locations/Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optmizations
- Reccommendations
- etc. etc.


## Types of Graphs
Based on the qualities of the edges:
**Undirected** there is no directionality to the edges
    - ie friendship relationships
**Directed** there is a directionality to the edges
    - ie pet ownership
**Weighted** values asigned to the edges
**Unweighted** no values assigned to the edges

## Representations of Graphs in Code
example graph diagram

            A – B
          /       \
         F         C
          \       /
           E  –  D

**Adjacency Matrix**
Two dimensional structure often employed with nested arrays. It creates a row and column structure (matrix) with vertices being represented along the top row and far left column. Connections (edges) between one vertice and another is represented with a 1 if they are connected and a 0 if they are not connected.

```
[
  ['-', 'A', 'B', 'C', 'D', 'E', 'F'],
  ['A',  0 ,  1 ,  0 ,  0 ,  0 ,  1 ],
  ['B',  1 ,  0 ,  1 ,  0 ,  0 ,  0 ],
  ['C',  0 ,  1 ,  0 ,  1 ,  0 ,  0 ],
  ['D',  0 ,  0 ,  1 ,  0 ,  1 ,  0 ],
  ['E',  0 ,  0 ,  0 ,  1 ,  0 ,  1 ],
  ['F',  1 ,  0 ,  0 ,  0 ,  1 ,  0 ],

]
```
**Adjacency List**
Uses a hash table strucutur or an array if the vertices are numbered (which can then corresponds to indexes in the array). Keys or indices represent vertices. Values represent the vertices that are connected to the vertices represented by the key and/or index.

```
{
  'A': ['B','F'],
  'B': ['C', 'A'],
  'C': ['D', 'B'],
  'D': ['E', 'C'],
  'E': ['F', 'D'],
  'F': ['A', 'E'],
}

```

## Adjacency Matrix vs Adjacency List Big O
v - number of vertices
e - number of edges

                       List            Matrix
Add a Vertex          O (1)          O (v^2)
Add an Edge           O (1)          O (1)
Remove a Vertex       O (v + e)      O (v^2)
Remove an Edge        O (v + e)      O (1)
Query                 O (v + e)      O (1)
Storage               O (v+e)        O (v^2)


Lists tend to be better if your vertices don't have a lot of edges
Matrices tend to be better if your vertices do have a lot of edges

