/* Fundamnetal part 2 */
// Activation Strict Mode

'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

//const interface = 'Audio';
//const private = S30;
const if = true;

*/

/*
// Functions 

function logger() {
    console.log('My name is Gyani');
}

// calling / running / invoking function 
logger(); 
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juices with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(3, 0);
//fruitProcessor(3, 0);
//console.log(fruitProcessor(3, 0));
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

/*

// Functions Declarations vs. Expressions


// Function Declaration
function calcAge1(birthYr){
    // const age1 = 2037 - birthYr;
    // return age1;
    return 2037 - birthYr;
}

const age1 = calcAge1(1991);

const calcAge2 = function(birthYr){
    return 2037 - birthYr;
}
//console.log(calcAge2(1991));
const age2 = calcAge2(1991);

console.log(age1, age2);

*/

/*
// Arrow Functions

const calcAge3 = birthYr => 2037 - birthYr; // arrow funtion as expression
const age3 = calcAge3(1991);
console.log(age3);

// arrow function for multiple values (calc retirement years) with fName

const yearsUntilretirement = (birthYr, firstName) => {
    const age = 2037 - birthYr;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

// const retiementYear = yearsUntilretirement(1991);
// console.log(retiementYear);

console.log(yearsUntilretirement(1991,'Gyani'));
console.log(yearsUntilretirement(1980,'Bob'));

*/

/* 
// Functions calling into Other functions

function cutPieces(fruits){
    return fruits * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applesPieces} piece of apple and ${orangePieces} piece of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/

/*

////////////////////////////
// Coding Challenge #1

const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
}
// Data 1:
let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolhins, avgKoalas);

function checkWinner(avgDolhins, avgKoalas){
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolhins win (${avgDolhins}) vs. ${avgKoalas}`);
    } else if(avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas}) vs. ${avgDolhins}`);
    } else{
        console.log('no one wins');
    }
}

checkWinner(avgDolhins, avgKoalas);

// Data 2:
avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolhins, avgKoalas);
checkWinner(avgDolhins, avgKoalas);

*/

/*

//////////////////////////////////
// Array Function

const friend1 = 'John';
const friend2 = 'Sam';
const friend3 = 'Pete';

const friends = ['John', 'Sam', 'Pete'];
console.log(friends);

const y = new Array(1991, 1998, 2005);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'];

const firstName = ['Jonas']
const jonas = [firstName, 'Schediam', 2037 - 2019, 'teacher', friends];

console.log(jonas);

console.log(jonas.length);

// Exercise to age with array

const calcAge2 = function(birthYr){
    return 2037 - birthYr;
}

const years = [1990, 1967, 2005, 2008, 2018];

const age1 = calcAge2(years[0]);
const age2 = calcAge2(years[1]);
const age3 = calcAge2(years[years.length - 1]);

console.log(age1, age2, age3);

//console.log(calcAge2(years[4]));

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];

console.log(ages);

*/

/*
//////////////////////////////////
// Basic Array Operations (Methods)

const friends = ['John', 'Sam', 'Pete'];

// Add Elements

friends.push('Jay'); // last
console.log(friends);


friends.unshift('Tommy'); // first
console.log(friends);

// Remove Elements
friends.pop(); // last
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Sam'));
console.log(friends.indexOf('Pete'));

friends.push(23);
console.log(friends.includes('Sam'));
console.log(friends.includes('Pete'));
console.log(friends.includes(23));

if(friends.includes('Pete')){
    console.log('You have friend peter');
}

*/

/*

//////////////////////////////////
// Coding Challenge #2

const calcTip = function(billValue){
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

//const calcTip = (billValue) => (billValue >= 50 && billValue <= 300) ? billValue * 0.15 :  billValue * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//const tips = [calcTip(125), calcTip(555), calcTip(44)];

console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

*/

/*

////////////////////////////////
// Introduction to Objects

/*
const jonasArray = [
    'Jonas',
    'Schdetamnn',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Bob', 'Ford']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schdetamn',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Bob', 'Ford']
};
*/

/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemdtanm',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Bob', 'pete']
}

console.log(jonas);

console.log(jonas.firstName);
console.log(jonas.job);

console.log(jonas.lastName); // Dot Notation Object
console.log(jonas['lastName']); // Bracket Notation Object

//Diff. between Dot and Bracket Notation 

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//console.log(jonas.interestedIn);

//const interestedIn = prompt('what you want to know about jonas? choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong Request! what you want to know about jonas? choose between firstName, lastName, age, job and friends');
}

jonas.location = 'portuagal';
jonas['twitter'] = '@gsgd';

console.log(jonas);

*/

/*

// coding callenge

//'jonas has 3 friends, and his best friend is called Michael'

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`); 

*/

/*

//////////////////////////
// Object as Method

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schekddamn',
    birthyear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Bob', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthyear) {
    //     return 2037 - birthyear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthyear;
    // }

    calcAge: function(){
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    getSummary: function(){
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
        return this.summary;
    }
}

//console.log(jonas.calcAge(jonas.birthyear));
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge 
// "Jonas is a 46-year old teacher, and he has a driver's license"

//console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? 'a' : 'no'} driver's license`);
console.log(jonas.getSummary());

*/

/*
/////////////////////////
// Coding Challenge #3

const markBMI = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = `${this.mass/(this.height ** 2)}`;
        return this.bmi;
    }
}

const johnBMI = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = `${this.mass/(this.height * this.height)}`;
        return this.bmi;
    }
}

// console.log(markBMI);
// console.log(johnBMI);
markBMI.calcBMI()
johnBMI.calcBMI()
//console.log(markBMI.bmi);
console.log(markBMI.bmi, johnBMI.bmi);

// const higherBMI = function(markBMI.BMI, johnBMI.BMI){
//     if(markBMI.BMI < johnBMI.BMI){
//         console.log(`${johnBMI.fullName} BMI (${johnBMI.BMI}) is higher than ${markBMI.fullName} (${markBMI.BMI})!`);
//     }
// }

// higherBMI(markBMI.BMI, johnBMI.BMI);

if(markBMI.bmi > johnBMI.bmi){
    console.log(`${markBMI.fullName} BMI (${markBMI.bmi}) is higher than ${johnBMI.fullName} (${johnBMI.bmi})!`);
} else if (johnBMI.BMI > markBMI.bmi){
    console.log(`${johnBMI.fullName} BMI (${johnBMI.bmi}) is higher than ${markBMI.fullName} (${markBMI.bmi})!`);
}

//console.log(`${markBMI.bmi} < ${johnBMI.bmi} ? '${johnBMI.fullName} BMI (${johnBMI.BMI}) is higher than ${markBMI.fullName} (${markBMI.BMI})!' : '${johnBMI.fullName} BMI (${johnBMI.BMI}) is Smaller than ${markBMI.fullName} (${markBMI.BMI})!'`);

*/

//////////////////////////////
// The for Loop

// console.log('Lifting weight repetition 1');
// console.log('Lifting weight repetition 2');
// console.log('Lifting weight repetition 3');
// console.log('Lifting weight repetition 4');
// console.log('Lifting weight repetition 5');
// console.log('Lifting weight repetition 6');
// console.log('Lifting weight repetition 7');
// console.log('Lifting weight repetition 8');
// console.log('Lifting weight repetition 9');
// console.log('Lifting weight repetition 10');

// For Loop Keep running condition is always true

/*
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep}`);
}

const jonas = [
    'Jonas',
    'Schemdatmn',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Bob', 'Steven'],
    true,
];

const types = [];

// console.log('jonas[0]');
// console.log('jonas[1]');
// console.log('jonas[1]');
// console.log('jonas[3]');
// console.log('jonas[4]');

for (let i = 0; i < jonas.length; i++){
    // assing the array
    console.log(jonas[i], typeof jonas[i]);

    // filling the array
    //types[i] = typeof jonas[i];

    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages[i] = 2037 - years[i];
    // ages.push(2037 - years[i]);
}
console.log(ages);

*/

/*

console.log('-------- Continue and Break ---------');
// continue and break 

console.log('-------- ONlY string ---------');

for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;
        console.log(jonas[i], typeof jonas[i])
}

console.log('-------- Break With Number ---------');

for(let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;
        console.log(jonas[i], typeof jonas[i])
}

*/

// looping backwards and Loops in loop

const jonas = [
    'Jonas',
    'Schemdamn',
    2037 - 1991,
    'Teacher',
    ['michael', 'Bob', 'Setven']
]

console.log(jonas);

// Looping backward

for(let i = (jonas.length - 1); i >= 0; i--){
    console.log(i, jonas[i]);
}


// loop into Loop

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`-------- Exercise: ${exercise} ----------`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}