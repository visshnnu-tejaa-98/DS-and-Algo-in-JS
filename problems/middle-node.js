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
		let n = new Node(val);
		if (!this.head) {
			this.head = n;
			this.tail = this.head;
		} else {
			n.next = this.head;
			this.head = n;
		}
		this.length++;
		return this;
	}
	get(idx) {
		if (idx < 0 || idx >= this.length) return 'Invalid index specified';
		let i = 0;
		let current = this.head;
		while (i < idx) {
			current = current.next;
			i++;
		}
		return current.val;
	}
	set(idx, val) {
		if (idx < 0 || idx > this.length) return 'Invalid index specified';
		let i = 0;
		let current = this.head;
		while (i < idx) {
			current = current.next;
			i++;
		}
		current.val = val;
		return true;
	}
	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return this.push(val);
		if (idx === 0) return this.unshift(val);
		let i = 0;
		let current = this.head;
		let n = new Node(val);
		while (i < idx - 1) {
			current = current.next;
			i++;
		}
		let prev = current.next;
		current.next = n;
		let temp = prev.next;
		n.next = temp;
		this.length++;
		return true;
	}
	remove(idx) {
		if (idx < 0 || idx >= this.length) return false;
		if (idx === 0) return this.shift();
		if (idx === this.length - 1) return this.pop();
		let i = 0;
		let current = this.head;
		while (i < idx - 1) {
			current = current.next;
			i++;
		}
		current.next = current.next.next;
		this.length--;
		return true;
	}
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;
		let next = null;
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			let next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	removeDuplicates() {
		if (!this.head) return undefined;
		let current = this.head;
		while (current && current.next) {
			if (current.val === current.next.val) {
				current.next = current.next.next;
			} else {
				current = current.next;
			}
		}
	}
	middleNode() {
		let fast = this.head;
		let slow = this.head;
		while (fast.next && fast.next.next) {
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow.val;
	}
}

let list = new SLL();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.middleNode());
