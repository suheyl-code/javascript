const name = "Sam";
let text = `This is a long text with a variable: ${name} ${name.length}!`;
console.log(text);

console.log(name.indexOf('m')); // 2
console.log(text.includes(name));   // true