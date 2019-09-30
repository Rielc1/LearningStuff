// Function constructor

var john = {
	name: 'John',
	yearOfBirth: '1998',
	job: 'teacher'
};
var Person = function(name, yearOfBirth, job){
	this.name =name;
	this.yearOfBirth= yearOfBirth;
	this.job = job;
	// this.calculateAge =function(){
	// 	console.log(2018 - this.yearOfBirth);
	

}
var john = new Person ('John', 1990, 'teacher');
/*
var person = function(name, yearOfBirth, job);

so variable person holds the three fields name, yearOfBirth, job)

var john = new Person('john', 1995, 'web developer ');

new Person creates a empty object in the memory in this the fields and values of john are stored..

instead of writing the same code we are using

new object it automatically creates some block of memory and stores the new name with the fields
*/
Person.prototype.calculateAge= function(){
	console.log(2018 - this.yearOfBirth);
}
var jane = new Person ('jane',1995,'teacher');
var mark = new Person ('mark',1986,'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
