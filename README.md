# Linked Lists Project

[Check the assignment here!](https://www.theodinproject.com/lessons/javascript-linked-lists)

## Specifications

1. Create a *LinkedList* class / factory, which will represent the full list.
1. Create a *Node* class / factory, containing a value function and a link to the nextNode, set both as null by default.
1. Build the following functions in your linked list class:
    * `append(value)` adds a new node containing value to the end of the list
    * `prepend(value)` adds a new node containing value to the start of the list
    * `size` returns the total number of nodes in the list
    * `head` returns the first node in the list
    * `tail` returns the last node in the list
    * `at(index)` returns the node at the given index
    * `pop` removes the last element from the list
    * `contains(value)` returns true if the passed in value is in the list and otherwise returns false.
    * `find(value)` returns the index of the node containing value, or null if not found.
    * `toString` represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
1. Extra Credit:
    * `insertAt(value, index)` that inserts a new node with the provided value at the given index.
    * `removeAt(index)` that removes the node at the given index.

## How to test it?

You can do it by using the *node* command

```
node linked-list.js
```

### Improvements that can be done

I would like to add tests for this project, although I'm just starting to learn how to use them, in the future I can come back and improve it!
