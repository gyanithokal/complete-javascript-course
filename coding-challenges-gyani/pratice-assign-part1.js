/* 
LECTURE: Values and Variables
1. Declarevariablescalled'country', 'continent'and'population'and assign their values according to your own country(population in millions)
2. Logtheirvaluestotheconsole 
*/

const country = "India";
const continent = "Asia";
let population = 1396;

console.log(country);
console.log(continent);
console.log(population);

/*
LECTURE: Data Types
1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. 
The variable should hold a Boolean value. 
Also declare a variable 'language', 
but don't assign it any value yet
2. Logthetypesof'isIsland','population','country'and'language' to the console
*/

const isIsland = true;
let language = 'hindi';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*
LECTURE: let, const and var
1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens
*/

// let language = 'Hindi';
// const isIsland = true;
// const country = "India";
// let population = 40;



/*
LECTURE: Basic Operators
1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
Finland?
4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
have less people than the average country?
5. Basedonthevariablesyoucreated,createanewvariable'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

let eachHalfPopulation = population / 2;
console.log(eachHalfPopulation);

population++;
console.log(population);

const populationFinland = 6;

console.log(population > populationFinland);

const averagePopulation = 33;
console.log(population < averagePopulation);

const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);

/*
LECTURE: Strings and Template Literals
1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
*/

const description = `${country} is in ${continent}, and its ${population} millions people speak ${language}.`;
console.log(description);

/*
LECTURE: Taking Decisions: if / else Statements
1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
*/

if (population > averagePopulation) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is ${averagePopulation - population} million below average`);
}

/*
LECTURE: Type Conversion and Coercion

1. Predicttheresultofthese5operationswithoutexecutingthem:
    '9' - '5'; // 4
    '19' - '13' + '17'; // 617
    '19' - '13' + 17; // 23
    '123' < 57; // false
    5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Executetheoperationstocheckifyouwereright 
*/

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

/*
LECTURE: Equality Operators: == vs. ===
Declareavariable'numNeighbours'basedonapromptinputlikethis
*/

/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
console.log(typeof numNeighbours);

if(numNeighbours === 1){
    console.log('Only 1 border!');
} else if(numNeighbours > 1){
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/

/*
LECTURE: Logical Operators
*/

let newCountry;

if((language == 'English') && (population < 50) && (isIsland)){
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet you criteria`);
}

/*
    LECTURE: The switch Statement
*/

//const givenLanguage = 'mandarin';

switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
    break;

    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;

    case 'english':
        console.log('3rd place');
    break;

    case 'hindi':
        console.log('Number 4');
    break;

    case 'arabic':
        console.log('5th most spoken language');
    break;
    default:
        console.log('Great Language Too');
}

/*
    LECTURE: The Conditional (Ternary) Operator
*/

if(population > 33 ? console.log(`${country} population is above average`) : console.log(`${country} population is below average`));




