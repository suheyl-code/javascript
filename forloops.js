const person = {
    name: "Mike",
    age: 28
};
const colors = ['red', 'green', 'blue'];

// classic for
console.log("\tclassic for section")
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// for-in
console.log("\n\tfor-in section")
for (let key in person) {
    console.log(key);
    console.log(person[key]); // have to use bracket notation.
}

for (let index in colors) {
    console.log(index);
    console.log(colors[index]);
}

// for-of 'Good for arrays'
console.log("\n\tfor-of section")
for (let color of colors) {
    // don't need to have index, it's always value.
    console.log(color);
}