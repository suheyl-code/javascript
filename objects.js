const person = {
    name: 'Mark',
    age: 34,
    email: 'mark@gmail.com',
    hobbies: ['Music', 'Books'],
    address: {
        City: 'NY',
        State: 'NY'
    },
    greeting: function() {
        return `Hello, my name is ${this.name}!`
    }
};

let val = person;
console.log(val);

console.log(val.greeting());
console.log(val.hobbies[0]);
console.log(val.address.City);
