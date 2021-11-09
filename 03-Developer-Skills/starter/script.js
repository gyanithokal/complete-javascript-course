// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthyear => 2037 - birthyear;
// console.log(calcAge(1991)); 

// PROBLEM: 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understansing the problem
// - What is amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - what is sensor error and what to do?

// 2) Breaking up into sub-problem
// - how to ignore sensor error?
// - find max value in temp array?
// - find min value in temp array?
// - Subract min from max(Amplitude) and return it

// const calcTempAmplitude = function (temps) {
    
//     let max = temps[0];
//     let min = temps[0];
//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if(curTemp > max) {
//             max = curTemp;
//         }
//         if(curTemp < min) {
//             min = curTemp;
//         }
//     }
//     console.log(max, min);
//     return max - min;
// };
// calcTempAmplitude([3, 7, 4, 23, 1]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PTOBLEM 2:
// function should now receive two error

// 1) understanding the problem
// - with 2 arrays, should we imlemnt functionality twice? Not just merge two arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps);


//     let max = temps[0];
//     let min = temps[0];
//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if(curTemp > max) {
//             max = curTemp;
//         }
//         if(curTemp < min) {
//             min = curTemp;
//         }
//     }
//     console.log(max, min);
//     return max - min;
// };
// //calcTempAmplitudeNew([3, 7, 4, 23, 1]);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);


/* Debuging and bug fixing */

const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C: Fix
        //value: Number(prompt('Degrees celsius:')),
        value: 10,
    }

    //console.log(measurement);
    console.table(measurement);
    //console.log(measurement.value);
    //console.warn(measurement.value);
    //console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// A) Identify Bug
// B) fix bug


console.log(measureKelvin());


/* Using debug bugs */

const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);


    let max = 0;
    let min = 0;
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;
        if(curTemp > max) {
            max = curTemp;
        }
        if(curTemp < min) {
            min = curTemp;
        }
    }
    console.log(max, min);
    return max - min;
};
//calcTempAmplitudeNew([3, 7, 4, 23, 1]);
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);

// A) Identify Bug
console.log(amplitudeBug);

// Developer Skills & Editor Setup
/* Coding Challenge #1 */

// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Createafunction'printForecast'whichtakesinanarray'arr'andlogsa string like the above to the console. Try it with both test datasets.
// 2. Usetheproblem-solvingframework:Understandtheproblemandbreakitup into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12,5,-5,0,4]

// A) Understanding the Problem
// - what if array having string
// - how find maximum number
// - console log string display 

// B) Breakup into subproblem
// - function merge array
// - max number
// -  console log display string

const printForecast = function(td1, td2){

    const arr = td1.concat(td2);
    console.log(arr);

    let printStr = '';
    
    for(let i = 0; i < arr.length; i++){
        printStr = printStr + `${arr[i]}oC in ${i + 1} days ... `;
    }
    console.log(`... ${printStr}`);
}

printForecast([17, 21, 23], [12, 5, -5, 0, 4]);