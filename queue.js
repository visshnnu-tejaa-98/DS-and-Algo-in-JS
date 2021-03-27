class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}
	enqueue(val) {
		let nn = new Node(val);
		if (!this.head) {
			this.head = nn;
			this.tail = this.head;
		} else {
			this.tail.next = nn;
			this.tail = nn;
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
	deque() {
		if (!this.head) return null;
		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return temp.val;
	}
}

let queue = new Queue();
