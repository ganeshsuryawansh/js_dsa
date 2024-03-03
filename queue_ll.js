
class QueueNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class QueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    inseart(data) {
        const newnode = new QueueNode(data);

        if (this.front == null) {
            this.front = this.rear = newnode;
        } else {
            this.rear.next = newnode;
            this.rear = newnode;
        }
    }

    delete() {
        if (this.front == null) {
            console.log("Queue Is Empty!");
        } else {
            var temp = this.front;
            this.front = this.front.next;
            console.log("Deleted Element is:", temp.data);
        }
    }

    display() {
        if (this.front == null) {
            console.log("Queue is Empty!");
        } else {
            console.log("Element in Queue is: ");
            var temp = this.front;

            while (temp != null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
}

const q = new QueueLL();

q.inseart(10);
q.inseart(9);
q.inseart(8);
q.inseart(7);
q.inseart(6);
q.inseart(5);
q.inseart(4);

q.display()
q.delete()
console.log(q);