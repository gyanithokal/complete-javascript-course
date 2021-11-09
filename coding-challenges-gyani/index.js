/*

// OLD JS code

// This is my first javascript code
//console.log('Hello World');

// variable declaration

//let name = 'Gyani';
//console.log(name);

// cannot be reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen(-)
// Are case-senitive

// let firstName = 'Gyani';
// let lastName = 'Thokal';

// constant declared

//const interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);


// primitives or value type variables

// let name = 'gyani'; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let middleName = undefined; // Undefined Literal
// let color = null;

// Object notation

let person = {
    name: 'Dhruv',
    age: 30
};

// Dot Notation

person.name = 'Jhon';

// Bracket Notation

let selection = 'name';
person[selection] = 'Jack';


console.log(person.name);

// Array decalartion

let selectedColors = [ 'red', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors);
console.log(selectedColors.length);

// function decalartion

function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Sam', 'Smith');

// calculaing a value

function square(number){
    return number * number;
}

//answer = square(2);

console.log(square(2));

// calculating a even and odd number

const number = prompt("Enter a number: ");
function checkEvenOdd(${input}){
    if(number % 2 == 0){
        console.log('Number Entered is Even number');
    }
    else{
        console.log('Number Entered is Odd number');
    }
}

checkEvenOdd(number);

*/

/*

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
*/

//////////////////////////////////
// Repratice Assignment


/* fundamentals 1 start here

// LECTURE: Values and Variables

//let country, continent, population;

const country = 'India';
const continent = 'Asia';
let population = 13;

//country = 'Nepal';

console.log(country, continent, population);

// LECTURE: Data Types

const isIsland = true;
let language;

console.log(isIsland, population, country, language);

// LECTURE: let, const and var

language = 'english';

console.log(isIsland, population, country, language);

// LECTURE: Basic Operators

const splitHalf = population / 2;
console.log(splitHalf, population + 1);

if(population > 6){
    console.log('yes');
    console.log(`${country} have more people than Finland`);
}

if(population > 33){
    console.log('yes');
    console.log(`${country} have more people than the average country`);
}

//LECTURE: Strings and Template Literals

const description =  `${country} is in ${continent}, and its ${population} million people speak ${language}`

console.log(description);

//LECTURE: Taking Decisions: if / else Statements


if(population > 33){
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


//LECTURE: Type Conversion and Coercion

'9' - '5';                // string 4
'19' - '13' + '17';       // string 617
'19' - '13' + 17;         // number 23
'123' < 57;               // boolean false
5 + 6 + '4' + 9 - 4 - 2;  // string 1143

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

//const numNeighbours = prompt('How many neighbour countries does your country have?');

const numNeighbours = 3;

if(numNeighbours === 1){
    console.log('only 1 border');
} else if(numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// LECTURE: Logical Operators

if(language === 'english' && population < 50 && !isIsland){
    console.log(`You should live in ${country} :)`);
} else{
    console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The Conditional (Ternary) Operator

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

//if(country > 33) ? 'console.log(`${country}'s population is above average'`)' : 'console.log(`${country}'s population is below average`');

*/  

// Coding changnelles for fundament part 1

// Challenge #1

// Data 1:
// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;
/*
// Data 2:
const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Challenge #2 

if(markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's!`);
} else{
    console.log(`John's BMI(${johnBMI}) is higher than Mark's!`);
}

console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
*/
// Coding Challenge #3

// Data 1:
/*
const dolphinAverage = (96 + 108 + 89)/3;
const koalasAverage = (88 + 91 +110)/3;
*/

// Data bonus 1:

// const dolphinAverage = (97 + 112 + 101)/3;
// const koalasAverage = (109 + 95 + 123)/3;

// Data bonus 2:

/*

const dolphinAverage = (97 + 112 + 101)/3;
const koalasAverage = (109 + 95 +106)/3;

console.log(dolphinAverage, koalasAverage);

if(dolphinAverage > koalasAverage){
    console.log(`Dolphins with highest average score wins a trophy!`);
} else if(dolphinAverage < koalasAverage){
    console.log(`Koalas with highest average score wins a trophy!`);
} else{
    console.log(`Both team had a draw`);
}

if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
    console.log(`Dolphins with highest average score wins a trophy!`);
} else if(dolphinAverage < koalasAverage && koalasAverage >= 100){
    console.log(`Koalas with highest average score wins a trophy!`);
} else if(dolphinAverage === koalasAverage && dolphinAverage >= 100 && koalasAverage >= 100){
    console.log(`Both win the trpohy`);
}
else{
    console.log(`no team wins the trophy`);
}
*/

// Coding Challenge #3

// Data 1:- 

//Dolphins: 96,108 and 89 === Koalas : 88,91 and 110;

// const dolphinsAverageScore = (96 + 108 + 89)/3;
// const koalasAverageScore = (88 + 91 + 110)/3;

// console.log(dolphinsAverageScore, koalasAverageScore);

// if(dolphinsAverageScore > koalasAverageScore){
//     console.log('Dolphins wins the Trophy');
// }   else if(koalasAverageScore > dolphinsAverageScore){
//     console.log('Koalas wins the Trophy');
// } else{
//     console.log('Both Team had same score match Draw');
// }

//Bonsus:-1

// const dolphinsAverageScore = (97 + 112 + 101)/3;
// const koalasAverageScore = (109 + 95 + 123)/3;

// Bonus:- 2
// const dolphinsAverageScore = (97 + 112 + 90)/3;
// const koalasAverageScore = (109 + 95 + 50)/3;
// console.log(dolphinsAverageScore, koalasAverageScore);

// if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100){
//     console.log('Dolphins wins the Trophy');
// }   else if(koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100){
//     console.log('Koalas wins the Trophy');
// }else if(dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100)
//     {
//     console.log('Both Team had same score so both win');
// }else{ 
//     console.log('No one win trophy');
// }


//Coding Challenge #4

//const tip = console.log(``)
/*
const billValues = 275;

// if(billValues >= 50 && billValues <= 300){
//     let tip = 15/100;
//     console.log(tip);
// } else {
//     let tip = 20/100;
//     console.log(tip);
// }

const tip = (billValues >= 50 && billValues <= 300) ? billValues * 0.15 : billValues * 0.20;
const finalValue = tip + billValues;
console.log(tip, billValues, finalValue);

console.log(`The bill was ${billValues}, the tip was ${tip}, and the total value ${finalValue}”`)

*/


///////////////////////////////
/******** ====== Repractice Fundamental 2 ====== ********/

'use strict';
/*
function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const country1 = describeCountry('India', 1339, 'Delhi');
const country2 = describeCountry('Finland', 6, 'Helsinki');
const country3 = describeCountry('Srilanka', 375, 'Lanka');

console.log(country1);
console.log(country2);
console.log(country3);

////////////////////////////////////

/* Function Declaration */
/*
function percentageOfWorld1(population){
    return (population / 7900) * 100;
}

/* Function Expression */

// const percentageOfWorld2 = function(population){
//     return (population / 7900) * 100;
// }

// /* Arrow Function */

// const percentageOfWorld3 = population => {
//     return (population / 7900) * 100;
// }

// const population1 = percentageOfWorld1(1339);
// const population2 = percentageOfWorld1(30);
// const population3 = percentageOfWorld1(6);
// console.log(population1, population2, population3);

// const population4 = percentageOfWorld2(1339);
// const population5 = percentageOfWorld2(30);
// const population6 = percentageOfWorld2(6);
// console.log(population4, population5, population6);

// const population7 = percentageOfWorld2(1339);
// const population8 = percentageOfWorld2(30);
// const population9 = percentageOfWorld2(6);
// console.log(population7, population8, population9);


// //////////////////////////////

// const describePopulation = function(country, population){
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
//     console.log(description);
//     //return `${country} has ${population} million people, which is about ${percentage}% of the world`;
// }

// describePopulation('India', 1339);
// describePopulation('China', 1441);
// describePopulation('US', 332);

// //console.log(descCountry1, descCountry2, descCountry3);

// // coding challenge #1


// // Arrow Function

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3)/3;

// // Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);



// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= (avgKoalas * 2)){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if(avgKoalas >= (avgDolphins * 2)){
//        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
//     } else {
//         console.log('No Team wins');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// // Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// */

/////////////////////////
/*
const populations = [1339, 320, 30, 6];

console.log((populations.length === 4) ? 'true' : 'false');

const percentageOfWorld1 = function(population){
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(percentages);

const neighbours = ['UAE', 'Nepal', 'SriLanka', 'China'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D')
}

neighbours[neighbours.indexOf('China')] = 'Republic of Anadman and nicobar';
console.log(neighbours);


// Coding Challenge #2

const calcTip = function(bill){
    const tip = (bill >= 300 && bill <= 50) ? (bill * 0.15) : (bill * 0.2);
    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

console.log(tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log(bills, tips, total)
*/
// Object syntax
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schemdantamn',
    age: 2037 - 1991,
    job: 'Teacher',
    friends:['Michael', 'Peter', 'Steven']
}

console.log(jonas);

jonas.location = 'Portuagal';
jonas['twitter'] = '@jonas.Schemdantamn';
console.log(jonas);

// challenge

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
*/
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthYear
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} driver's license`
    }

}

//console.log(jonas.calcAge(1991));
console.log(jonas.calcAge());

console.log(jonas.age);

console.log(jonas.getSummary());

// challenge

//console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${(jonas.hasDriversLicense) ? 'a' : 'no'} driver's license`);

*/
///////////
/*
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1339,
    neighbours: ['UAE', 'Nepal', 'SriLanka'],
    //isIsland: true,
    describe: function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },

    checkIsland: function(){
        this.isIsland = (this.neighbours.length === 0) ? 'false' : 'true';
        return this.isIsland;
    }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

myCountry['population'] = myCountry.population - 2;
console.log(myCountry.population);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// coding challenge 3# object

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}


mark.calcBMI();
john.calcBMI();
console.log(mark.BMI, john.BMI);

if(mark.BMI < john.BMI){
    console.log(`${john.fullName} BMI(${john.BMI}) is higher than ${mark.fullName} BMI(${mark.BMI})`);
} else{
    console.log(`${mark.fullName} BMI(${mark.BMI}) is higher than ${john.fullName} BMI(${john.BMI})`);
}

/// looping

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'steven'],
    true
];

const types = [];

for( let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);

    //filling array
    types[i] = typeof jonas[i];
}

console.log(types);

/// while loop


// let rep = 1;
// while(rep <= 10){
//     console.log(`WHILE: Lifting the weights Repition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log(`Loop is about to end....`);
}

///////////////////////////////////////

for( let i = 1; i < 51; i++){
    console.log(`Voter Number ${i} is currently voting`);
}

const percentageOfWorld1 = function(population){
    return (population / 7900) * 100;
}

const populations = [1339, 320, 30, 60]
console.log(populations);

const percentages2 = [];

for (let i = 0; i < populations.length; i++){
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);

///////////////////////////////////////

const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
]


for( let i = 0; i < listOfNeighbours.length; i++){
    for(let y = 0; y < listOfNeighbours[i].length; y++){
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}

*/

//// ============/* While Loop */============ ////

// const percentage3 = [];

// let i = 0;

// while(i < populations.length){
//     const perc2 = percentageOfWorld1(populations[i]);
//     percentage3.push(perc2);
//     i++;
// }

// console.log(percentage3);



//////////////////////////

const calcTip = function(bill){
    return (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);
}

/*Coding Challenge #4*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++){
    const caltip = calcTip(bills[i]);
    tips.push(caltip);

    // const total = caltip + bills[i];
    totals.push(caltip + bills[i]);
}

console.log(bills, tips, totals);

/// ========== Bonus ============ ///



const calcAverage = function(arr){
    let sum = 0;
    for ( let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));