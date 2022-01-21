// list of objects
const products = [
    {name: 'LG', category: 'Mobile'},
    {name: 'Samsung', category: 'Washing Machine'},
    {name: 'Apple', category: 'TV'},
    {name: 'iPhone', category: 'Mobile'}
];

// filter brings all matches.
const result = products.filter(function(product) {
    return product.category == 'Mobile';
})
console.log(result);

// shows the process in which filter choose outcome.
const resultInMap = products.map(function(product) {
    return product.category == 'Mobile';
})
console.log(resultInMap);

// Find reveals just the first match, no all!
const resultInFind = products.find(function(product) {
    return product.category == 'Mobile';
})
console.log(resultInFind);
