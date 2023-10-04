//////////---------Simple Calculate----------------
/**
 * 
 * In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

Input Samples	
12 1 5.30
16 2 5.10


Output Samples
VALOR A PAGAR: R$ 15.50
 */

const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const values1 = lines[0].split(' ');
const values2 = lines[1].split(' ');

const codeProduct1 = parseInt(values1[0]);
const unitProduct1 = parseInt(values1[1]);
const priceProduct1 = parseFloat(values1[2]).toFixed(2);

const codeProduct2 = parseInt(values2[0]);
const unitProduct2 = parseInt(values2[1]);
const priceProduct2 = parseFloat(values2[2]).toFixed(2);
const value = (unitProduct1 * priceProduct1) + (unitProduct2 * priceProduct2);

console.log("VALOR A PAGAR: R$ "+value.toFixed(2));