// run with nodejs
const array1 = [1,2,3,4,5];
const array2 = [];

array1.forEach(item => {
    console.log(item)
});


console.log(array2);    // []

array1.forEach(e => {
    array2.push(e * e);
})
console.log(array2);    // [ 1, 4, 9, 16, 25 ]


const filterArray = array2.filter(num => num>4);
console.log(filterArray);   // [ 9, 16, 25 ]
