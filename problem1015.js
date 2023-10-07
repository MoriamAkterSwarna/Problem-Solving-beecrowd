////////=========Distance Between Two Points=========//////////
/**
 * Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

Distance = 

Input
The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

Output
Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.

Input Sample	
1.0 7.0
5.0 9.0


Output Sample
4.4721
 */
const input = require('fs').readFileSync("/dev/stdin", 'utf-8');
const lines = input.split('\n');
const value1 = lines[0].split(' ');
const value2 = lines[1].split(' ');

const x1 = parseFloat(value1[0]);
const y1 = parseFloat(value1[1]);

const x2 = parseFloat(value2[0]);
const y2 = parseFloat(value2[1]);

const distance = Math.sqrt(Math.pow((x2 -x1), 2) + Math.pow((y2 -y1), 2));
console.log(distance.toFixed(4));