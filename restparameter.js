// ...Rest
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(a, b, rest[0]);

// Destructuring
const person = {
    name: "Jack",
    age: 23,
    mail: "jack.jones@example.com",
    eyeColor: 'Brown',
    talk: () => `${name} is talking...!`
};

const { name, age, mail, eyeColor, talk } = person;
console.log(name, age, mail, talk());
