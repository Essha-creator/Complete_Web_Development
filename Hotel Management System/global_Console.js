// // globalConsole.js - Custom global console for colored output

// const originalLog = console.log;

// // Define a global log function that colors output
// console.log = function (...args) {
//   const coloredArgs = args.map(arg => `\x1b[32m${arg}\x1b[0m`); // Green color
//   originalLog(...coloredArgs);
// };

// // Define a warning color
// console.warn = function (...args) {
//   const coloredArgs = args.map(arg => `\x1b[33m${arg}\x1b[0m`); // Yellow
//   originalLog(...coloredArgs);
// };

// // Define an error color
// console.error = function (...args) {
//   const coloredArgs = args.map(arg => `\x1b[31m${arg}\x1b[0m`); // Red
//   originalLog(...coloredArgs);
// };
