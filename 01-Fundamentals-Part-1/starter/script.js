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

/*
// Coding Challenge #1

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = (markBMI > johnBMI);

console.log(markHigherBMI);

*/


/*
///////////////////////////////////
// Strings and Template Literals (ES6) new tool

const firstName = 'Gyani';
const job = 'Programmer';
const birthYear = 1991;
const year = 2037;


// concatent string
const gyani = "I'm " + firstName + ', a ' + (year - birthYear)
    + ' year old ' + job;

console.log(gyani);

// Template literals ES6 new tool

const gyaniNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(gyaniNew);

console.log(`just a regular string...`);

// multiline string

console.log("String with \n\ multi \n\line");

// but template literals make easy

console.log(`String with
multi
line`);

*/

/*
/////////////////////////////////
// If / else Statements

const age = 15;

if (age >= 18) {
    console.log(`Dhruv can start driving license 😇`);
} else {
    const yearLeft = 18 - age;
    console.log(`Dhruv is too younger. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

*/

/*
////////////////////////
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = (markBMI > johnBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
}

*/

/*
////////////////////////
// Type coversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Gyani'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; //11 become string
n = n - 1; // n become number 10
console.log(n);

*/

/*
////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Gyani'));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should do a job");
}

let height = 0;
if (height) {
    console.log("Hay height is defined");
} else {
    console.log("height is undefined");
}

*/

/*
/////////////////////////////
// Equality Operators: == vs ===

const age = 18;
if (age === 18) console.log('you just became a Adult: (Strict)');

if (age == 18) console.log('you just became a Adult: (Loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is amazing number");
} else if (favourite === 7) {
    console.log("7 is also Cool number");
} else if (favourite === 9) {
    console.log("9 is also Cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Number is not 23 or 7");

*/

/*
////////////////////////////////
// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // true

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sara is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

const isTried = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTried);

if(hasDriversLicense && hasGoodVision && !isTried){
    console.log('Sara is able to drive');
} else {
    console.log('Someone else should drive...');
}

*/       

/*
///////////////////////////////////
// coding Challenge #3

// const averageDolphins = (96 + 108 + 89)/3;
// const averageKoalas = (88 + 91 + 110)/3;

// console.log(averageDolphins);
// console.log(averageKoalas);

// if(averageDolphins > averageKoalas){
//     console.log('Dolphins Team is Winner!');
// } else if(averageDolphins < averageKoalas){
//     console.log('Koalas Team is Winner!');
// } else{
//     console.log('Both Team had Draw');
// } 

//Data Bonus 1:
// const averageDolphins = (97 + 112 + 101)/3;
// const averageKoalas = (109 + 95 + 123)/3;

//Data Bonus 2:
const averageDolphins = (97 + 112 + 101)/3;
const averageKoalas = (109 + 95 + 106)/3;

const minimumScore = 100;

console.log(averageDolphins);
console.log(averageKoalas);

if((averageDolphins > averageKoalas) && (averageDolphins >= minimumScore)){
    console.log('Dolphins Team is Winner!');
} else if((averageDolphins < averageKoalas) && (averageKoalas >= minimumScore)){
    console.log('Koalas Team is Winner!');
} else if((averageDolphins === averageKoalas) && (averageDolphins >= minimumScore) && (averageKoalas >= minimumScore)){
    console.log('Both Team had Draw');
} else {
    console.log('no team wins the Trophy');
}

*/

/*
///////////////////////////////
// The switch statement

const day = 'friday';

if(day === 'monday'){
    console.log('Plan course Structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('Perpare Theory Videos');
} else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code Examples');
} else if(day === 'friday'){
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
} else{
    console.log('Not a valid day');
}

*/

///////////////////////////////
// The Conditional (Ternary) Operator
 const age = 23;

//age >= 18 ? console.log('I like to drink Wine :D') : console.log('I like to drink Soft drink');


// const drink = age >= 18 ? ('wine') : ('water'); //Ternary operator
// console.log(drink);

// let drink2;
// if(age >= 18){
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age} >= 18 ? 'wine' : 'water'`);


/*
Coding Challenge #4
*/

const billValue = 275;

const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 :  billValue * 0.2;

//console.log(tip);

const totalValue = billValue + tip;
console.log(billValue, tip, totalValue);

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue}`);