class llNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // js function to append node in dll
    create(data) {
        const newnode = new llNode(data);

        if (this.head == null) {
            this.head = this.tail = newnode;
        } else {
            newnode.prev = this.tail;
            this.tail.next = newnode;
            this.tail = newnode;
        }
    }

    inseart_front(data) {
        let newnode = new llNode(data);

        if (this.head == null) {
            this.head = this.tail = newnode;
        } else {
            newnode.next = this.head;
            this.head.prev = newnode;
            this.head = newnode;
        }
    }

    inseart_End(data) {
        let newnode = new llNode(data);
        if (this.head == null) {
            this.head = this.tail = newnode;
        } else {
            this.tail.next = newnode; // tail chya next la newnode
            newnode.prev = this.tail // newnode chya prev la this.tail
            this.tail = newnode // and tail la newnode 
        }
    }

    inseart_in_beetween(data, pos) {
        let newnode = new llNode(data)
        let p = this.head
        if (pos == 1) {
            newnode.next = this.head
            this.head.prev = newnode
            this.head = newnode
        } else {
            for (let i = 1; i < pos - 1 && p != null; i++) {
                p = p.next       // p next = head to position 
                var q = p.next   // q = p.next
                newnode.next = q // newnode next = q which is p next
                q.prev = newnode
                p.next = newnode
                newnode.prev = p
            }
        }
    }

    delfront() {
        if (this.head.next == null) {
            this.head = this.tail = null
        } else {
            console.log("The Element deleted is", this.head.data);
            this.head = this.head.next
            this.head.prev = null;
        }
    }

    delend() {
        if (this.head.next == null) {
            this.head = this.tail = null
        } else {
            let q = this.tail
            var p = q.prev
            console.log("The Element Deleted Is: ", q.data);
            p.next = null
        }
    }

    del_in_beetween(pos) {
        let p = this.head;
        for (let i = 1; i < pos && p != null; i++) {
            p = p.next;
            var q = p.next;
            var r = p.prev;
            r.next = q;
            q.prev = r;
        }
    }

    display() {
        if (this.head == null) {
            console.log("List is Empty");
        } else {
            let current = this.head;
            while (current != null) {
                console.log(current.data);
                current = current = current.next;
            }
        }
    }

    displayrev() {
        if (this.head == null) {
            console.log("Linked list is empty!");
        } else {
            let current = this.tail;

            while (current != null) {
                console.log(current.data);
                current = current.prev;
            }
        }
    }

    sumeven() {
        var sum = 0
        var p = this.head;
        while (p != null) {
            if (p.data % 2 == 0) {
                sum = sum + p.data;
            }
            p = p.next
        }
        console.log(sum);
    }
}



let a = new LinkedList();
a.inseart_front(5)
a.inseart_front(6)
a.inseart_front(7)
a.inseart_front(8)
a.inseart_front(9)
// a.inseart_End(10);
a.inseart_in_beetween(800,)
// a.delfront()
// a.delend();
// a.del_in_beetween(2)

// a.display()
// a.displayrev()
a.sumeven();

console.log(a);


