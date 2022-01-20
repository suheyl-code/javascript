const person = {
    name: "Mike",
    age: 28
};
const colors = ['red', 'green', 'blue'];

// for-in
for (let key in person) {
    console.log(key);
    console.log(person[key]);
}
for (let index in colors) {
    console.log(index);
    console.log(colors[index]);
}

// for-of
for (let color of colors) {
    console.log(color);
}