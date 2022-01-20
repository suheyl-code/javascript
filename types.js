// to time our script, check timeEnd()
console.time('time it:');
console.log("hi there!");

let name = "James";
console.log(typeof name);

// floats are just 'numbers'
let float = 12.34;
console.log(float, typeof float);

// value undefined and type undefined.
let number = undefined;
console.log(typeof number); // undefined    

// null value is of type 'object'.
let product = null;
console.log(typeof product); // object

let person = {
    name: "john",
    age: 34
}
// two ways to access object attributes
console.log(person.name, typeof person);
console.log(person["age"]);

// arrays: object type
let myList = ["Merry", 23];
console.log(myList, typeof myList);
myList[2] = true;
console.log(myList);

console.table({a:1, b:2});

console.warn('this is a warning!');
console.timeEnd('time it:');