/*
//////////////////////////////////////
// First Lecture Value and Varibales

let js = "amazing!";
console.log(40 + 40 + 20 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Gyani";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let count = 30; // Number
let myFirstJob = 'Programmer' // String
let mySecondJob = 'Tester' // String

console.log(myFirstJob);


//////////////////////////////////////
// Second Lecture Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Gyani');

javascriptIsFun = "Yes !";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = '1991';
console.log(typeof year);

console.log(typeof null);



//////////////////////////////////////
// Third Lecture Difference bet let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = "Thokal"
console.log(lastName);



//////////////////////////////////////
// Basic operator Lecture 

// Arithmetic Operator

const now = 2037;
const ageGyani = now - 1991;
const ageDhruv = now - 2018;

console.log(ageGyani, ageDhruv);

console.log(ageGyani * 2, ageGyani / 10, 2 ** 3);
// 2 ** 3 means 3 the power of 2 (3 = 2*2*2)

const firstName = 'Gyani';
const lastName = 'Thokal';

console.log(firstName + ' ' + lastName);

// Assignment Operator

let x = 10 + 5;
x += 10; // x = x + 10; (25)
x *= 4; // x = x * 4; (100)
x++; // x = x + 1; 
x--; // x = x - 1;
x--;

console.log(x);

// Comparision Operator
console.log(ageGyani > ageDhruv); // <, >=, <=,
console.log(ageDhruv >= 18); // age is full

const ageIsFull = ageDhruv >= 18;
console.log(ageIsFull);

console.log(now - 1991 > now - 2018);

*/

/*
// Operator Precedence

const now = 2037;
const ageGyani = now - 1991;
const ageDhruv = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x=y=10;

console.log(x, y);

const averageAge = (ageGyani + ageDhruv) / 2;
console.log(ageGyani, ageDhruv, averageAge);


*/

// Coding Challenge #1

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = (markBMI > johnBMI);

console.log(markHigherBMI);
