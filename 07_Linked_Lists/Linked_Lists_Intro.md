# Singly Linked Lists
A list of ordered data. The list itself contains a head, tail, and length property. The list cormprises data nodes. Each data node has a value and a pointer. The value stores data and the pointer references the next node in the list (or null if there is no next node).
- no index values for the data
- no random access => to access data, you must access the 'next' or pointer
- head and tail really serve and endpoints and help specify inwhich direction the pointers are going.

# Utility
- useful for insertion and deletion at the beginning
  - compared to in an array where every other piece of data has to be re-indexed

# Big O Notation
**Insertion** O (1)
**Removal**
O(1) removing from the beginning,
O(n) elsewhere.
**Searching** O(n)
**Access** O(n)

# Doubly Linked List
Similar to singly linked list, except each node has two pointers. One pointer pointing to the previous node and one pointer pointing to the next node.
The extra pointer does take up more memory.
**Insertion** O (1)
**Removal** O(1) removing from the beginning, O(n) elsewhere.
**Searching** O(n), optimized it is O (n/2) but still slightly better singly linked list.
**Access** O(n)