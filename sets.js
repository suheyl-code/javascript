// sets keep unique parameters.
let mySet = new Set();

mySet.add(12);
mySet.add('A String!');
mySet.add({name: 'Scout'});
mySet.add([3.5, 4.5, 5.5]);
mySet.add(true);
mySet.add(12); // Doesn't add duplicates

console.log(mySet);
console.log(mySet.size);
console.log(mySet.has('A String!'));

mySet.delete(12);
console.log(mySet);

mySet.clear();
console.log(mySet);
