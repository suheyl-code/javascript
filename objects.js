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



let journal = [];
function addEntry(events,squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
console.log(journal);

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if(!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(journal));