let number;

// Math Modules max & min
number = Math.max(1,2,3,4,5,6,7);   // 7
number = Math.min(1,2,3,4,5,6,7);   // 1

// abs
number = Math.abs(-3);  // 3

// random
number = Math.random(); //every time gives a number between 0 and 1 like: 0.7345952669813607
number = Math.random() * 10;    //random numbers between 0 and 10

// Ceiling & Floor & Round
number = Math.ceil(3.8);    // 4
number = Math.floor(3.8);   // 3
number = Math.round(3.4);   // 3
number = Math.round(Math.random() * 10);    // integers between 0 and 10

console.log(number);