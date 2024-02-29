

"use strict"

class LLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
    }

    // Create Singally Linked List
    Create(data) {
        const newnode = new LLNode(data);

        if (this.head == null) {
            this.head = newnode;
        }
        else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newnode;
        }
    }

    // inseart element at front
    InseartFront(data) {
        let newnode = new LLNode(data)
        newnode.next = this.head;
        this.head = newnode;
    }

    // Inseart at end
    Inseart_end(data) {
        let newnode = new LLNode(data);
        let current = this.head;

        if (current == null) {
            this.head = newnode;
            return;
        }
        while (current.next != null) {
            current = current.next;
        }
        current.next = newnode;
    }

    // inseart at given position
    Inseart_at_given_position(data, pos) {
        let newnode = new LLNode(data);
        let temp = this.head;

        for (let i = 1; i <= pos - 1 && temp.next != null; i++) {
            temp = temp.next;
            newnode.next = temp.next;
            temp.next = newnode;
        }
    }

    // traverse singly ll
    display() {
        if (this.head == null) {
            console.log("List is empty!");
        } else {
            let temp = this.head;
            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }

    // delete front
    delete_front() {
        console.log("The element deleted is", this.head.data);

        if (this.head == null) {
            this.head = null
        } else {
            this.head = null
        }
    }

    // delete end
    delete_end() {
        let p = this.head;
        while (p.next != null) {
            var q = p;
            p = p.next
        }
        q.next = null
        console.log("Element deleted is ", p.data);
    }

    // Delete in between
    Delete_at_given_position(pos) {
        let p = this.head;

        for (let i = 1; i < pos && p != null; i++) {
            var q = p;
            p = p.next

        }
        console.log("The element deleted is ", p.data);
        q.next = p.next;
    }

    // Reverse sll
    reverse() {
        var p = null, q = null, r = this.head;
        while (r != null) {
            p = q;
            q = r;
            r = r.next;
            q.next = p;
            this.head = q;
        }
    }

    // concate tow linked lists
    concat() {
        if (this.head == null) {
            return this.head1;
        }
        else {
            if (this.head1 == null) {
                return this.head1;
            } else {
                var temp = this.head;
                while (temp.next != null) {
                    temp = temp.next;
                    temp.next = this.head1;
                }
            }
        }
    }

    // length of ll
    length() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        console.log(count);
    }

    // Search Element in ll
    Search(item) {
        var i = 0, flag;
        var ptr = this.head

        if (ptr == null) {
            console.log("Empty List");
        } else {
            while (ptr != null) {
                if (ptr.data == item) {
                    console.log("Item Found at Location", i + 1);
                    flag = 0;
                    break;
                } else {
                    flag = 1;
                }
                i++;
                ptr = ptr.next;
            }
            if (flag == 1) {
                console.log("Item not found !");
            }
        }


    }

    sort() {
        var current = this.head;
        while (current != null) {
            var current1 = current.next;
            while (current.data > current1.data) {
                if (current.data > current1.data) {
                    var t = current.data;
                    current.data = current1.data;
                    current1.data = t;
                }
                current1 = current1.next
            }
            current = current.next
        }
    }

    Sorted_mearge() {
        var a = this.head, b = this.head1, result = null, temp;
        var newnode;
        if (a == null) {
            return b;
        } else {
            if (b == null) {
                return a;
            } else {

                while (a != null && b != null) {
                    if (a.data < b.data) {
                        newnode = new LLNode(a.data);
                        a = a.next;
                    } else {
                        newnode = new LLNode(b.data);
                        b = b.next;
                    }

                    if (result == null) {
                        result = temp = newnode;
                    } else {
                        temp.next = newnode;
                        temp = temp.next;
                    }
                }

                if (a != null) {
                    temp.next = a;

                    if (b != null) {
                        temp.next
                    }
                }
            }
        }
    }

    getfirst() {
        return this.head;
    }

    getlast() {
        let lastnode = this.head;

        while (lastnode.next != null) {
            lastnode = lastnode.next;
        }
        return lastnode.data;
    }

    sum() {
        var sum = 0;
        var p = this.head;
        while (p != null) {
            sum = sum + p.data;
            p = p.next;
        }
        console.log("Sum of all elements is: " + sum);
    }
}

let a = new Linkedlist();
a.InseartFront(22);
// a.Inseart_end(55);
a.InseartFront(23);
a.InseartFront(24);
a.InseartFront(25);
a.InseartFront(26);
a.InseartFront(288);
a.InseartFront(2)



// a.Inseart_at_given_position(100, 2);
// a.delete_end();
// a.Delete_at_given_position(2)

// a.reverse();
// a.sort();
// a.display();
// console.log(a.getfirst())
// console.log("hello");
// a.length()
// a.Search(25);

// a.delete_front();
// a.display();

// console.log(a.getlast());


a.sum()