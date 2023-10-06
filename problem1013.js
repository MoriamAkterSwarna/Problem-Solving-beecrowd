// ------------- The Greatest---------------
/**
 * Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:



Input
The input file contains 3 integer values.

Output
Print the greatest of these three values followed by a space and the message “eh o maior”.

Input Samples	
7 14 106

Output Samples
106 eh o maior
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');
const values = lines[0].split(' ');

const A = parseInt(values[0]);
const B = parseInt(values[1]);
const C = parseInt(values[2]);

const maiorAB = parseInt(A + B  + Math.abs(A - B))/2;
const maiorABC = parseInt(maiorAB + C + Math.abs(maiorAB - C))/2;
console.log(`${maiorABC} eh o maior`);