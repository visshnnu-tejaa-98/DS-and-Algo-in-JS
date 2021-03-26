class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SSL {
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
}

let list = new SSL();

// try this in console

list.push('Hello');
list.push('There');
list.push('good bye');

console.log(list);
