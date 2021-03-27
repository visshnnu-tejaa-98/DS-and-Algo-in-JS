class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let nn = new Node(val);
		if (!this.head) {
			this.head = nn;
			this.tail = this.head;
		} else {
			let temp = this.head;
			this.head = nn;
			this.head.next = temp;
		}
		this.length++;
		return this.length;
	}
	traverse() {
		let i = 0;
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
			i++;
		}
	}
	pop() {
		if (!this.head) return null;
		let temp = this.head;
		this.head = temp.next;
		temp.next = null;
		return temp.val;
	}
}

let stack = new Stack();
