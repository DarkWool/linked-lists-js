class LinkedList {
    constructor() {
        this.list = null;
    }

    append(value) {
        const node = new Node(value);
        if (this.list == null) return this.list = node;

        let lastNode = this.list;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }

        lastNode.nextNode = node;
    }

    prepend(value) {
        const newNode = new Node(value);

        // Point new node "next" property to the curr head node
        newNode.nextNode = this.list;
        this.list = newNode;
    }

    size() {
        if (this.list == null) return 0;

        let totalNodes = 1;
        let currNode = this.list;
        while (currNode.nextNode != null) {
            currNode = currNode.nextNode;
            totalNodes++;
        }

        return totalNodes;
    }

    head() {
        return this.list;
    }
    
    tail() {
        // If the head node is null return null
        if (this.list == null) return null;

        let lastNode = this.list;
        while (lastNode.nextNode != null) {
            lastNode = lastNode.nextNode;
        }

        return lastNode;
    }

    at(index) {
        let currNode = this.list;
        if (index < 0 || index == null || isNaN(index)) return null;

        for (let i = 0; i < index; i++) {
            const nextNode = currNode.nextNode;
            if (nextNode == null) return null;

            currNode = nextNode;
        }

        return currNode;
    }

    pop() {
        let curr = this.list;
        if (curr == null) return;
        else if (curr.nextNode == null) this.list = null;
        
        while (curr.nextNode != null) {
            const tmp = curr.nextNode;
            if (tmp.nextNode == null) {
                curr.nextNode = null;
                return;
            }

            curr = tmp;
        }
    }

    contains(value) {
        let currNode = this.list;
        while (currNode != null) {
            if (currNode.value === value) return true;
            currNode = currNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currNode = this.list;
        for (let i = 0; currNode != null; i++) {
            if (currNode.value === value) return i;
            currNode = currNode.nextNode;
        }

        return null;
    }

    toString(node = this.list) {
        if (node === null) return "null";

        return `( ${node.value} ) -> ${this.toString(node.nextNode)}`;
    }

    insertAt(value, index) {
        if (index === 0) return this.prepend(value);

        const prevNode = this.at(index - 1);
        if (!prevNode) return;

        const newNode = new Node(value);
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
    }

    removeAt(index) {
        if (index === 0) {
            this.list = this.list.nextNode;
            return;
        }

        const prevNode = this.at(index - 1);
        if (!prevNode || !prevNode.nextNode) return;

        prevNode.nextNode = prevNode.nextNode.nextNode;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value,
        this.nextNode = nextNode
    }
}


const list = new LinkedList();
list.append(10);
list.append(9);
list.prepend(7);
list.append(2);
console.log(list.toString());  // Returns 7 -> 10 -> 9 -> 2 -> null

console.log(list.head());  // Node with value 7
console.log(list.tail());  // Node with value 2

console.log(list.at(2));    // Node with value 9
console.log(list.at(50));   // null
console.log(list.at(0));    // Node with value 7

list.insertAt(20, 3);       // Inserts node with value 20 at index 3
list.insertAt(999, 0);      // Inserts node with value 999 at index 0
list.insertAt(10000, 50);   // Does nothing (index does not exist)

console.log(list.toString());
console.log(`Size: ${list.size()} nodes`);  // Returns 6

console.log(list.contains(9))    // True
console.log(list.contains(100))  // False

console.log(list.find(7));   // Returns index 1
console.log(list.find(22));  // null

list.removeAt(2);  // Removes node at index 2
list.removeAt();   // Does nothing (index does not exist)
list.removeAt(5);  // Does nothing (index does not exist)
list.removeAt(0);  // Removes node at index 0

console.log(list.toString());  // Returns 999 -> 7 -> 9 -> 20 -> 2 -> null
