///////////////Average 2///////////
/*
Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

Input
The input file contains 3 values of floating points (double) with one digit after the decimal point.

Output
Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.

Input Samples	
5.0
6.0
7.0

Output Samples
MEDIA = 6.3
*/    

var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()).toFixed(1);
var B = parseFloat(lines.shift()).toFixed(1);
var C = parseFloat(lines.shift()).toFixed(1);

MEDIA = ((A * 2) + (B * 3) + (C * 5)) / (2 + 3 + 5);

console.log("MEDIA = "+MEDIA.toFixed(1))