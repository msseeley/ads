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