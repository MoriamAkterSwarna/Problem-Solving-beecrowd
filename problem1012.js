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