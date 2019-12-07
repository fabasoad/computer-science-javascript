class MyNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    hasNext() {
        return !!this.next;
    }
}

class MyLinkedList {
    constructor() {
        this.current = null;
        this.tail = null;
    }
    add(val) {
        if (this.current) {
            this.tail.next = new MyNode(val);
            this.tail = this.tail.next;
        } else {
            this.current = new MyNode(val);
            this.tail = this.current;
        }
    }
}

const runLinkedListExample = (arr) => {
    console.log('Linked List');
    const list = new MyLinkedList();
    for (const a of arr) {
        list.add(a);
    }
    let current = list.current;
    while (!!current) {
        console.log(current.val);
        current = current.next;
    }
};

class MyDoubleNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    hasNext() {
        return !!this.next;
    }
    hasPrev() {
        return !!this.prev;
    }
}

class MyDoubleLinkedList {
    constructor() {
        this.current = null;
        this.tail = null;
    }
    add(val) {
        if (this.current) {
            this.tail.next = new MyDoubleNode(val);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        } else {
            this.current = new MyDoubleNode(val);
            this.tail = this.current;
        }
    }
}

const runDoubleLinkedListExample = (arr) => {
    console.log('Double Linked List');
    const list = new MyDoubleLinkedList();
    for (const a of arr) {
        list.add(a);
    }
    console.log('from head');
    let current = list.current;
    while (!!current) {
        console.log(current.val);
        current = current.next;
    }
    console.log('from tail');
    let tail = list.tail;
    while (!!tail) {
        console.log(tail.val);
        tail = tail.prev;
    }
};

const run = runDoubleLinkedListExample;

const arr = [ 1, 23, 2, 43, 445, 2323, 123, 11, 222, 11, 222 ];
run(arr);