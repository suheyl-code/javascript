// two examples why we should not use 'var'!

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// 1st example
if(true) {
    var a = 4;  // this changes the Global Scope a!
    let b = 5;  // cannot change Global Scope.
    const c = 6;    // cannot change Global Scope.
    console.log('in If Scope: ', a, b, c);
}
console.log('in Global Scope: ', a, b, c);

// 2nd example
for(var a = 0; a < 10; a++) {
    console.log(`loop ${a}`);
}
console.log('a is', a); // now, Global a is 10!