

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    Create(data) {
        Const = newNode = new BSTNode(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            var temp = this.root;
            while (temp != null) {
                if (data < temp.data) {

                    if (temp.left == null) {
                        temp.left = newNode;
                        break;
                    } else {
                        temp = temp.left;
                    }
                } else {
                    if (temp.right == null) {
                        temp.right = newNode;
                        break;
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    }

    find(data) {
        var temp = this.root;
        while (temp != null) {
            if (temp.data == data) {
                return temp.data;
            }

            if (data < temp.data) {
                temp = temp.left
            } else {
                temp = temp.right;
            }

            return null;
        }
    }

    findRec(node = this.root, data) {
        if (node == null) {
            return null;
        }
        if (node.data == data) {
            return data;
        } else {
            if (data < node.data) {
                this.findRec(node.left, data);
            } else {
                this.findRec(node.right, data);
            }
        }
    }

    InseartRec(node = this.root, data) {

        if (node == null) {
            const newNode = new BSTNode(data);
            node = newNode;
        }
        else {
            if (data < node.data) {
                this.InseartRec(node.left, data);
            } else {
                this.InseartRec(node.right, data);
            }
        }
    }

    Inseart(data) {
        const newnode = new BSTNode(data);

        if (this.root == null) {
            this.root = newnode;
        } else {
            var temp = this.root;
            while (temp != null) {
                if (data < temp.data) {
                    if (temp.left == null) {
                        temp.left = newnode;
                        break;
                    } else {
                        temp = temp.right;
                    }
                } else {
                    if (temp.right == null) {
                        temp.right = newnode;
                        break;
                    } else {
                        temp = temp.right;
                    }
                }
            }
        }
    }

    delete_bst(data, node = this.root) {
        var temp = this.root;
        var parent = null
        while (temp != null) {
            if (n == temp.data) {
                break;

            }

            parent = temp
            if (n < temp.data) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }

            if (temp == null) {
                console.log("Number Not Found!");
                return (this.root)
            }

            if (temp.left != null && temp.right != null) {
                var parsucc = temp;
                var succ = temp.right;

                while (succ.left != null) {
                    parsucc = succ;
                    succ = succ, left;
                }
                temp.data = succ.data;
                temp = succ;
                parent = parsucc;
            }
            if (temp.left != null) {
                var child = temp.left;
            } else {
                child = temp.right;
            }

            if (parent == null) {
                root = child;
            } else if (temp == parent.left) {
                parent.left = child;
            } else {
                parent.right = child;
            }
            return this.root
        }
    }

    findmin() {
        var current = this.root;
        while (current.left != null) {
            current = current.left;
            return current.data;
        }
    }

    del(key, node = this.root) {
        if (node == null) {
            console.log("tree is empty!");
            return null;
        }

        if (key < node.data) {
            node.left = this.del(key, node.right);
            return node;
        }

        if (key > node.data) {
            node.right = this.del(key, node.left);
            return node;
        }

        if (node.left == null && node.right == null) {
            return null;
        }

        if (node.left == null) {
            node = node.right
            return node;
        }

        if (node.right == null) {
            node = node.left;
            return node;
        }

        var temp = this.findmin(node.right);
        node.data = temp.data;

        node.right = this.del(temp.data, node.right)
        return node;
    }
}

const t = new BST();
t.Inseart(10);
t.Inseart(9);
t.Inseart(12);
t.Inseart(56);

console.log(t.find(12))

console.log(t);
