function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}


export default function BinarySeachTree() {
    this.root = null
}

BinarySeachTree.prototype.insert = function (data) {
    const newNode = new Node(data);
    if (this.root === null) {
        this.root = newNode;
        return this;
    }
    let current = this.root;
    while (current) {
        if (data.weight === current.data.weight) return undefined;
        if (data.weight < current.data.weight) {
            if (current.left === null) {
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if (current.right === null) {
                current.right = newNode;
                return this;
            }
            current = current.right;
        }
    }
}

BinarySeachTree.prototype.preOrder = function () {
    if (this.root == null) {
        return null;
    } else {
        const result = new Array();
        function traversePreOrder(node) {
            node.right && traversePreOrder(node.right);
            result.push(node.data);
            node.left && traversePreOrder(node.left);
        }
        traversePreOrder(this.root);
        return result;
    };
}



export function getSortedAnimelList(animalLst) {
    //Creating and building a Binary Seach Tree for sorting the animals in O(n) runtime:
    const mySearchTree = new BinarySeachTree()
    for (let i = 0; i < animalLst.length; i++) {
        const animal = animalLst[i];
        mySearchTree.insert(animal)
    }

    // the sorted animal variables list:
    const sorted = mySearchTree.preOrder().map(animal => `${animal.name}: ${animal.weight} kilo`);
    return sorted
}