// gives an error:
// Uncaught RangeError: Maximum call stack size exceeded
// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }

// console.log(chicken() + " came first ");

// // another version with same error
// const chicken2 = () => egg2();
// const egg2 = () => chicken2();

// console.log(chicken2());

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

let items = [];
repeat(5, i => {
    items.push(`this is ${i}`);
})
console.log(items);