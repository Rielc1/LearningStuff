/****************************
* Variables and data types

var firstname = 'john';
console.log(firstname);

var lastname = 'smith';
var age = 28;

var fullage = true;
console.log(fullage);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
/*
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/********************************************************
* Variable mutation and type correction
*/

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;
// alert(firstname +'is')
// var lastname = prompt('what is his last name?');

/***********************************************************
 * Basic operators
 // */
 // var year , yearJohn, yearMark;
 // now = 2018;
 // ageJohn= 28;
 // ageMark=33;
 //  yearJohn = now - 28;
 //  yearMark = now -33;
 // console.log(yearJohn);
 
 // console.log(now + 2);
 // console.log(now * 2);
 // console.log(now / 10);

 // //logical operators 
 // var johnOlder = ageJohn < ageMark;
 // console.log(johnOlder);

 // //tyepof operators
 // console.log(typeof johnOlder);
 // console.log(typeof ageJohn);
 // console.log(typeof 'mark is older than john')
 // var x;
 // console.log(typeof ageJohn);
 // ***************************************************************
 // Operator precedence
 // *
//  var now= 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge)
 
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn +ageMark) / 2;
// console.log(average);
// // multiple assignments *********************************
// var x, y;
// x = y = (3+5) * 4-6; //8* 4 -6 //32-6// 26
// console.log(x,y);
// // more operators
// // x=x *2;
// x*=2;
// console.log(x);
// x +=10 
// // x = x +10
// x--;
// console.log(x);
// coding challenge *********************************************
// var jmass, mmass, jheight, mheight, jbmi, mbmi, markHigher;
// jmass = 150;
// mmass= 190;
// jheight= 1.9;
// mheight = 2;
// jbmi = jmass / (jheight * jheight);
// mbmi = mmass / (mheight * mheight);
// markHigher = jbmi < mbmi;
// console.log("is mark's bmi higher than johns's ? " + markHigher);
// *********************** if/else statements *****************
// var firstName = 'john';
// var civilStatus = 'single';


// if(civilStatus === 'married'){
// 	console.log(firstName + ' is married');
// }
// else{
// 	console.log(firstname + ' will hopefully marry soon :)');
// }
// ********************Boolean logic*****************************
//************ternary operator
 // var firstname='john';
// var age = 14;
// age >= 18 ? console.log(firstname +" drinks beer ")
// : console.log(firstname + 'drinks juice' );

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);
// **************************Switch STatement******************
// var job = 'faf';
// switch (job) {
// 	case 'teacher':
// 		console.log(firstname + ' teches kids to code');
// 		break;
// 	case 'driver':
// 		console.log('drives and uber');
// 		break;
// 	default:
// 		console.log(firstname+ 'does something else');
//}
// falsy values are undefined, null, 0 , NaN
// ********************challnege code 2****************************
// var mavg =(89 +120 +13)/3;
// var javg =(116 + 94 +123)/3;
// var mravg=(97 +134 +1305) /3;
// console.log(mavg,javg,mravg);
// if(mavg > javg && mavg > mravg ){
// 	console.log('mike is the winner');
// }
// else if(mravg > javg && mravg > mavg ){
// 	console.log('mary is the winner');
// }
// else if(javg> mavg && javg > mravg){
// 	console.log('john is the winner');
// }
// else {
// 	console.log('It is a draw');
// }

// ****************************function*******************************************
// function calculateAge(birthyear){
// 	return 2018 - birthyear;
// }
// var ageJohn= calculateAge(1990);
// console.log(ageJohn);
// ***********************************function statements and expression***********

// var whatDoYouDo = function(job,firstname){
// 	switch(job){
// 		case 'teacher':
// 		return firstname + ' teaches kids';
// 		case 'driver':
// 		return +' drives uiber';
// 		case 'designer':
// 		return 'designs websites for people'
// 		default:
// 		return firstname 
// 	}
// ***************************************************** CHallenge;
// var tip1,tip2,tip3;
// var total;
// function tipscalc(total)
// {
// 	if (total < 50){
// 		var tip1 = total *0.2;
// 		return tip1;
// 	}
// 	else if(total >= 50 && total < 200){
// 		var tip2 = total *0.15;
// 		return tip2;
// 	}
// 	else{
// 		var tip3 = total * .10;
// 		return tip3;
// 	}
// }
// function full(total)
// {
// 	if (total < 50){
// 		var tip1 = total *0.2;
// 		return tip1+total;
// 	}
// 	else if(total >= 50 && total < 200){
// 		var tip2 = total *0.15;
// 		return tip2+total;
// 	}
// 	else{
// 		var tip3 = total * .10;
// 		return tip3+total;
// 	}
// }
// var johnTips = [0,1,2];
// var johnTotal = [0,1,2];
// johnTips[0] = tipscalc(124);
// johnTips[1] = tipscalc(48);
// johnTips[2] = tipscalc(268);
// johnTotal[0] = full(124);
// johnTotal[1] = full(48);
// johnTotal[2] = full(268);
// console.log(johnTips);
// console.log(johnTotal)
//**************************************OBJECTS and Properties**********************************
// var john = {
// 	firstname: 'John',
// 	lastname: 'Smith',
// 	birthyear: 1990,
// 	family: ['Jane','Mark','Bob','Emily'],
// 	job: 'teacher',
// 	isMarried: false


// };
// //object literal
// console.log(john.firstname);
// console.log(john['lastname']);
// var x = 'birthyear';
// console.log(john[x]);
// john.job='designer';
// john['isMarried'] =true;
// console.log(john);
// //new object
// var jane = new Object();
// jane.name ='Jane';
// jane.birthyear = 1969;
// jane['lastname'] ='Smith';
// console.log(jane);
// //hi bitbucket
//******* object  and methods */
// var john ={
// 	firstname: 'john',
// 	lastname: 'Smith',
// 	birthYear: 1992,
// 	familly: ['jane','mark','bob','emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function() {
// 		this.age = 2018 - this.birthYear;
// 	}
// };
// john.calcAge();
// console.log(john);
// ***************************************coding challenge 4*************************

// var john ={
// 	fullName: 'John',
// 	height: '2.1',
// 	weight: '140',
// 	calcbmi: function() {
// 		this.bmi =this.weight / (this.height * this.height);
// 	}
// };
// var mark ={
// 	fullName: 'mark',
// 	height: '2.5',
// 	weight: '130',
// 	calcbmi: function() {
// 		this.bmi =this.weight / (this.height * this.height);
// 	}

// };

// 	john.calcbmi();
// 	mark.calcbmi();
// 	if (john.bmi > mark.bmi){
// 		console.log('john is fatter then mark');

// 	}
// 	else if(john.bmi < mark.bmi){
// 		console.log('mark is fatter then john');
// 	}
// 	else {
// 		console.log('they both equaLy fat')
// 	}
	//******************************************loops*************************************************
