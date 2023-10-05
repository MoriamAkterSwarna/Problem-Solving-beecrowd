//-------------Area----------//

/**
 * Make a program that reads three floating point values: A, B and C. Then, calculate and show:
a) the area of the rectangled triangle that has base A and height C.
b) the area of the radius's circle C. (pi = 3.14159)
c) the area of the trapezium which has A and B by base, and C by height.
d) the area of ​​the square that has side B.
e) the area of the rectangle that has sides A and B.

Input
The input file contains three double values with one digit after the decimal point.

Output
The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.

Input Samples	
3.0 4.0 5.2


Output Samples
TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');
const lines = input.split('\n');

const values = lines[0].split(' ');


const A = parseFloat(values[0]);
const B = parseFloat(values[1]);
const C = parseFloat(values[2]);

const triangle = parseFloat(A * C) /2;
const circle = 3.14159 * Math.pow(C, 2);
const trapezium = ((parseFloat(A) + parseFloat(B))/2) * C
const square = Math.pow(B, 2);
const rectangle = A * B;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);