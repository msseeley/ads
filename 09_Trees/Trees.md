#Trees
Are a data structure that organizes data in a tree-like structure. Each piece of data (or node) contains pointers to another piece of data with pointers pointing in a single direction away from the root node.
A tree can only have one root node and nodes themselves can only follow the single direction.

## Terminology
**Root** The top node in a tree.
**Child** A node that is pointed at by another node.
**Parent** A node that points to another node.
**Sibling** Nodes that share the same parent node.
**Leaf** Node with no children (nodes beneath it).

        Root  ->    Node A
                  /       \
              Node B       Node C
            /     \        /     \
         Node D  Node E  Node F   Node G

Node A is a **parent** to Nodes B and C
  Nodes B and C are **siblings**
  Node B is a **parent** to Nodes D & E
    Nodes D and E is a **children** to Node B


## Uses
- the DOM
- Network Routing
- Abstract Syntax Trees for programming languages
- AI machines
- JSON parsing
- etc.

## Some types of Trees
- Binary Trees
- Heaps
- B-Trees

## Binary Trees
Each node has a max of two children.

## Binary Search Trees
Binary Tree that is sorted in a particular order. Used to store data that can be compared and sorted in a particular fashion. Classically, this is numbers, but could be other things.
Sorting order is everything greater than the root is stored on the right side and everything less than the root is stored on the left side. Each node's children, in micro, follows this same patter as well.

## Searching a Binary Tree
Ordering systm makes insertion and lookup much quicker.

## Breadth First Search
Visting or searching through nodes based on their level on the tree. Essentially looking at siblings and cousins for each level before moving down.

## Depth First Search
Visiting or searching through nodes going down the branches in various orders.
 - PreOrder: parent node, left child, right child
  - return an order that you could reconstruct the tree at a later time
 - PostOrder: left child, right child, parent node
 - InOrder: left child, parent node, right child
  - returns all the nodes in a sorted order which can be useful


## which to use?
wide trees do better with a depth first search in term of space
deep trees do better with a breadth first search in terms of space




