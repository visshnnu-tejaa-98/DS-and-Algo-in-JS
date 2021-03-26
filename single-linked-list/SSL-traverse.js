class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SLL {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	push(val) {
		let n = new Node(val);
		if (!this.head) {
			this.head = n;
			this.tail = this.head;
		} else {
			this.tail.next = n;
			this.tail = n;
		}
		this.length++;
		return this;
	}
	traverse() {
		let current = this.head;
		while (current) {
			console.log(current);
			current = current.next;
		}
	}
}

let list = new SLL();
list.push('Hi');
list.push('Everyone');
list.push('Bye');
// console.log(list);
list.traverse();
