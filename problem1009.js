//----Salary with Bonus
/**
 * Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.

Input Samples	
JOAO
500.00
1230.30


Output Samples
TOTAL = R$ 684.54
 */

const input = require('fs').readFileSync('/dev/stdin', 'utf-8');    
const lines = input.split('\n');

const sellerName= lines.shift();

const fixedSalary = parseFloat(lines.shift()).toFixed(2);
const totalSales = parseFloat(lines.shift()).toFixed(2);

const Total = parseFloat(fixedSalary)  + (parseFloat(totalSales)  * (15/100));
console.log("TOTAL = R$ "+Total.toFixed(2));
