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
