# Hash Tables

## What are they?
Used to tore key-value pairs, where the keys are not ordered, like a JS Object(only must use strings for keys) and Maps.
Particularly fast for finding and removing values.

## Hash Functions
Are used to create key lookup for hash tables. A user creates a key, which is run through a hash function to return a number (of fixed size) which is the place of storage for the value associated with the key. Generally the hash function output cannot be reverse engineered to figure out the input.
Hash functions should be fast to run and distributes values uniformly, avoides collisions (duplication of hash output), consistent outputs for the inputs.

### Collisions
- Result when two hash outputs are the same, despite having different keys.
- Two common ways in storage of dealing with them are **Linear Probing** and **Separate Chaining**
- Linear Probing: Store the data at the next available spot.
- Separate Chaining: Storing the key value pairs at the same spot (ie in an array or linked list).