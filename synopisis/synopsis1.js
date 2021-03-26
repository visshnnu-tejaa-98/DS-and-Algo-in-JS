// class component
class Student {
	constructor(fName, lName) {
		this.fName = fName;
		this.lName = lName;
	}
}

// creating instances of students
let s1 = new Student('Visshnnu', 'Tejaa');
let s2 = new Student('Venkata', 'Chalapathi');

// console.log the whole object
console.log(s1);
console.log(s2);

// getting acces to particular value in the object
let s1_name = s1.fName + ' ' + s1.lName;
console.log(s1_name);
