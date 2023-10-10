////========Age in Days
/**
 * Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

Input
The input file contains 1 integer value.

Output
Print the output, like the following example.

Input Sample	
400

Output Sample
1 ano(s)
1 mes(es)
5 dia(s)
 */




const input = require("fs").readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const days = parseInt(lines.shift());

const year = days / 365;
const remainDays = days % 365;

const month = remainDays / 30;
const remainDay = remainDays % 30;

console.log(`${parseInt(year)} ano(s)`);
console.log(`${parseInt(month)} mes(es)`);
console.log(`${parseInt(remainDay)} dia(s)`);


