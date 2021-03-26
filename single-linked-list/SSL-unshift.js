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
			console.log(current.val);
			current = current.next;
		}
	}
	pop() {
		if (!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current.val;
	}
	shift() {
		if (!this.head) return undefined;
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
	unshift(val) {
		let newHead = new Node(val);
		if (!this.head) {
			this.head = newHead;
			this.tail = this.head;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}
	get(idx) {
		if (idx < 0 || idx >= this.length) return 'Invalid Index Specified';
		let i = 0;
		let current = this.head;

		while (i != idx) {
			current = current.next;
			i++;
		}
		return current.val;
	}
}

let list = new SLL();
