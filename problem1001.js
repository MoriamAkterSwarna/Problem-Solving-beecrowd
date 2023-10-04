// const A = 10;
// const B = 9;
// const X = A + B;

// console.log("X = " + X);
// console.log()

// Path: problem2.js
// const A = parseInt(prompt('Enter the value of A: '));
// const B = parseInt(prompt('Enter the value of B: '));
// const X = A + B;
// console.log(`X = ${X}`);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the value of A: ', (inputA) => {
//   rl.question('Enter the value of B: ', (inputB) => {
//     const A = parseInt(inputA);
//     const B = parseInt(inputB);
//     const X = A + B;
    
//     console.log(`X = ${X}`);
//     rl.close();
//   });
// });

// -------------------------- Accepted------------------------------
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B= parseInt(lines.shift());

console.log('X = ' + (A+B));
