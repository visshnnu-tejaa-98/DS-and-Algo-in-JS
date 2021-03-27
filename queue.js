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
}

let queue = new Queue();
