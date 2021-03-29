class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let nn = new Node(value);
		if (!this.root) {
			this.root = nn;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = nn;
					return this;
				} else {
					current = current.left;
				}
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = nn;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}
	find(value) {
		if (!this.root) return false;
		let current = this.root;
		while (true) {
			if (current.value === value) {
				return true;
			}
			if (value < current.value) {
				if (current.left === null) {
					return false;
				}
				current = current.left;
			} else if (value > current.value) {
				if (current.right === null) {
					return false;
				}
				current = current.right;
			}
		}
	}
}

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// class BST {
// 	constructor() {
// 		this.root = null;
// 	}
// 	insert(value) {
// 		let nn = new Node(value);
// 		if (!this.root) {
// 			this.root = nn;
// 			return this;
// 		}
// 		let current = this.root;
// 		while (true) {
// 			if (value < current.value) {
// 				if (current.left === null) {
// 					current.left = nn;
// 					return this;
// 				} else {
// 					current = current.left;
// 				}
// 			} else if (value > current.value) {
// 				if (current.right === null) {
// 					current.right = nn;
// 					return this;
// 				} else {
// 					current = current.right;
// 				}
// 			}
// 		}
// 	}
// }
