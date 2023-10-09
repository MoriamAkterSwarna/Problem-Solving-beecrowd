/////// ===== Banknotes ===== ///////

/**
 * In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.

Input
The input file contains an integer value N (0 < N < 1000000).

Output
Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.

Input Sample	
576

Output Sample
576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
 */

const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const money = parseInt(lines.shift());

const hundred = money / 100;
const remainHundred = money % 100;

const fifty =  remainHundred / 50;
const remainFifty = remainHundred % 50;

const twenty = remainFifty / 20;
const remainTwenty = remainFifty % 20;

const ten= remainTwenty / 10;
const remainTen = remainTwenty % 10;

const five = remainTen / 5;
const remainFive = remainTen % 5;

const two = remainFive / 2;
const remainTwo = remainFive % 2;

const one = remainTwo / 1;


console.log(money);
console.log(`${parseInt(hundred)} nota(s) de R$ 100,00`);
console.log(`${parseInt(fifty)} nota(s) de R$ 50,00`);
console.log(`${parseInt(twenty)} nota(s) de R$ 20,00`);
console.log(`${parseInt(ten)} nota(s) de R$ 10,00`);
console.log(`${parseInt(five)} nota(s) de R$ 5,00`);
console.log(`${parseInt(two)} nota(s) de R$ 2,00`);
console.log(`${parseInt(one)} nota(s) de R$ 1,00`);

