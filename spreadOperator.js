// Spread Operator
let postcode = "123-Fg-98";
let value = [...postcode];
console.log(value);
value.forEach(x => console.log(x));

// Used for copy mechanism as well
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);  // [1, 2, 3]


let _products = [
    {
        Id: 1,
        name: "Alex",
        age: 34
    },
    {
        Id: 2,
        name: "James",
        age: 23
    },
    {
        Id: 3,
        name: "Johnson",
        age: 56
    }
    
]

let _newProduct = [
    {
        Id: 4,
        name: "Mike",
        age: 12
    }
]

// Classic way of concating two objects
let allProducts = _products.concat(_newProduct);
console.log(allProducts);

// with Spread Operator, same result as above
let spProducts = [..._products, ..._newProduct];
console.log(spProducts);



// Another usage is in Date
let myBirthday1 = new Date(1979, 08, 02);
console.log(myBirthday1);

let val = [1979,08,02];
let myBirthday2 = new Date(...val)
console.log(myBirthday2);