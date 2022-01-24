function addition(a,b) {
  return a + b;
}

function subtraction (a,b) {
  return a - b;
}

function multiplication(a,b) {
  return a * b;
}

function division(a,b) {
  return a / b;
}

//module.exports.addition = addition;
//module.exports.subtraction = subtraction;
// or like the following syntax:
module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiplication: multiplication,
  division: division,
}
//console.log(module);
console.log('filename', __filename);
console.log('dirname', __dirname);