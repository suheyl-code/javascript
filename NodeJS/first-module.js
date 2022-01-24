// In node, every js file is a module which has a module inside that module.
console.log(module);

const calculator = require('./calculator');
console.log(calculator.addition(2, 3));