// inscance method
class Student {
	constructor(fName, lName) {
		this.fName = fName;
		this.lName = lName;
		this.tardis = 0;
		this.scores = [];
	}
	fullName() {
		return `My full Name is ${this.fName} ${this.lName}`;
	}
	markLate() {
		this.tardis++;
		if (this.tardis <= 3) {
			return `${this.fName} ${this.lName} has been late ${this.tardis} times`;
		}
	}
	addScore(score) {
		this.scores.push(score);
		return this.scores;
	}
	calculateAverage() {
		let sum = this.scores.reduce((a, b) => a + b);
		return sum / this.scores.length;
	}
}

// creating instance
let s1 = new Student('Visshnnu', 'Tejaa');

// printing the full name
console.log(s1.fullName());

//marking markLate
console.log(s1.markLate());
console.log(s1.markLate());

// adding scores
console.log(s1.addScore(99));
console.log(s1.addScore(78));
console.log(s1.addScore(88));

// getting average
console.log(s1.calculateAverage());
