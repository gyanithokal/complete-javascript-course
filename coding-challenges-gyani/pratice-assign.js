/* 
LECTURE: Values and Variables
1. Declarevariablescalled'country', 'continent'and'population'and assign their values according to your own country(population in millions)
2. Logtheirvaluestotheconsole 
*/

const country = "India";
let continent = "Asia";
let population = 1391.99;

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

let isIsland = true;
let language = 'Marathi';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

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

let x = population / 2;
console.log(x);

population++;
console.log(population);

const populationFinland = 6;

console.log(population >= populationFinland);

const averagePopulation = 33;
console.log(population < averagePopulation);

const description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);