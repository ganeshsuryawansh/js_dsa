class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stackll {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newnode = new StackNode(data);
        newnode.next = this.top;
        this.top = newnode;
    }

    pop() {
        if (this.top == null) {
            console.log("Stack Is Empty");
        } else {
            console.log("The Value Popoed Is:", this.top.data);
            this.top = this.top.next;
        }
    }

    display() {
        if (this.top == null) {
            console.log("Stack Is Empty!");
        } else {
            var p = this.top;
            while (p != null) {
                console.log(p.data);
                p = p.next;
            }
        }
    }
}


const c = new Stackll();

c.push(10);
c.push(9);
c.push(8);
c.push(7);
c.push(6);

c.pop();
c.pop();
c.pop();

c.display();
// console.log(c);