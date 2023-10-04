//////////Simple Product//////////////////
/*
Read two integer values. After this, calculate the product between them and store the result in a variable named PROD. Print the result like the example below. Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.

Input
The input file contains 2 integer numbers.

Output
Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.

Input Samples	
3
9
Output Samples
PROD = 27
*/    
var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var PROD = A * B;

console.log("PROD = " + PROD);