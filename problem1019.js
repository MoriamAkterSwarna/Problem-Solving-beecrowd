// ======Time Conversion======
/**
 * Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

Input
The input file contains an integer N.

Output
Print the read time in the input file (seconds) converted in hours:minutes:seconds like the following example.

Input Sample	
556

Output Sample
0:9:16
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8');    
const lines = input.split('\n');

const seconds = parseInt(lines.shift());
// const seconds = 140153;
const hour = seconds / 3600;
const remainHour = seconds % 3600;
const minutes = remainHour / 60;

const second = remainHour % 60;


console.log(`${parseInt(hour)}:${parseInt(minutes)}:${parseInt(second)}`);
