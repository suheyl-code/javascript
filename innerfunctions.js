// gives an error:
// Uncaught RangeError: Maximum call stack size exceeded
function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " came first ");

// another version with same error
const chicken2 = () => egg2();
const egg2 = () => chicken2();

console.log(chicken2());