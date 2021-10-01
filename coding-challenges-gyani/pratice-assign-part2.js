
// Fundamental part 2 exercise

/*
LECTURE: Functions
1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity){
    //console.log(country, population, capitalCity);
    const describe1 = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return describe1;
}

//describeCountry('India', 1390, 'Delhi');

const describeData1 = describeCountry('India', 1390, 'Delhi');
console.log(describeData1);

const describeData2 = describeCountry('USA', 332, 'Washington');
console.log(describeData2);

const describeData3 = describeCountry('Canada', 140, 'Ottawa');
console.log(describeData3);


// Function Declarations vs. Expressions
/*
1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

function percentageOfWorld1(population){
    const percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}
const percentagePopulation1 = percentageOfWorld1('1390');
console.log(percentagePopulation1);

const percentagePopulation2 = percentageOfWorld1('1441');
console.log(percentagePopulation2);

const percentagePopulation3 = percentageOfWorld1('332');
console.log(percentagePopulation3);

// function as expression

const percentageOfWorld2 = function(population){
    const percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}

const percentagePopulation4 = percentageOfWorld1('1390');
const percentagePopulation5 = percentageOfWorld1('1441');
const percentagePopulation6 = percentageOfWorld1('332');
console.log(percentagePopulation4, percentagePopulation5, percentagePopulation6);

// Arrow Functions 

const percentageOfWorld3 = (population) => {
    const percentagePopulation = (population / 7900) * 100;
    return percentagePopulation;
}
const percentagePopulation7 = percentageOfWorld1('1390');
const percentagePopulation8 = percentageOfWorld1('1441');
const percentagePopulation9 = percentageOfWorld1('332');
console.log(percentagePopulation7, percentagePopulation8, percentagePopulation9);

// LECTURE: Functions Calling Other Functions
/*
1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
3. Call'describePopulation'withdatafor3countriesofyourchoice
*/

function describePopulation(country, population){
    const describePercentage = percentageOfWorld1(population);
    const countryPercentage = `${country} has ${population} million people which is about ${describePercentage}% of the world.`;
    return countryPercentage;
}

console.log(describePopulation('India', 1390));
console.log(describePopulation('China', 1441));
console.log(describePopulation('USA', 332));


// LECTURE: Introduction to Arrays
/*
1. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
3. Createanarraycalled'percentages'containingthepercentagesofthe
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const populations = [1390, 1441, 332, 30];
console.log(populations);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);


// LECTURE: Basic Array Operations (Methods)
/*
1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbours = ['Srilanka', 'Nepal', 'UAE'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('UAE')] = 'Republic of UAE';
console.log(neighbours);


/*
LECTURE: Introduction to Objects
1. Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

*/

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1390,
    neighbours: ['Nepal', 'SriLanka', 'UAE'],
};


/*
LECTURE: Dot vs. Bracket Notation
1. Usingtheobjectfromthepreviousassignment,logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increasethecountry'spopulationbytwomillionusingdotnotation,andthen decrease it by two million using brackets notation.

*/

console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//console.log(`${myCountry.population + 2}`);
//console.log(`${myCountry[population] - 2}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);


/*
LECTURE: Object Methods
1. Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Callthe'describe'method
3. Addamethodcalled'checkIsland'tothe'myCountry'object.This
method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
*/

// myCountry = {
//     describe: function(){
//         console.log(this);
//         return;
//     }
// }


//console.log(myCountry.describe());

const myCountry2 = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1390,
    neighbours: ['Nepal', 'SriLanka', 'UAE'],
    //isIsland: true,
    getDesc: function(){
        // this.getDescribe = `${this.country} gone ${this.population} million ${this.language}-speaking people ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
        // return this.getDescribe;
        return `${this.country} gone ${this.population} million ${this.language}-speaking people ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsland: function(){
        //return `${myCountry2.isIsland = (true) => ''}`;
        this.isIsland = this.neighbours.length === 0 ? 'true' : 'false';

        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);
    }
};


myCountry2.getDesc();
myCountry2.checkIsland();
console.log(myCountry2);