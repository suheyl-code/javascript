let person = new Map();
console.log(person, typeof person);

person.set('person1', {
    firstName: 'John',
    lastName: 'MacKenzie'
})
console.log(person);
console.log(person.get('person1'));

person.set('person2', {
    firstName: 'James',
    lastName: 'Johnson'
})
console.log(person);
console.log(person.get('person2'));

person.set('A String', 'This is a simple string!');
console.log(person);
console.log(person.get('A String'));

person.set('Trigger', function() {console.log('Triggered: Hello!')});
console.log(person);
console.log(person.get('Trigger'));
// with () we run the function
person.get('Trigger')();

console.log(person.size);
console.log(person.has('person2'));

person.delete('person2');
console.log(person);

person.clear();
console.log(person);