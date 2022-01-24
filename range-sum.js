// exercise p. 82 of 'Eloquent Javascript'
// Write a range() and a sum() function to calculate sum(range(1, 10))

function range(begining, end) {
  if(typeof begining === 'number' && typeof end === 'number') {
    let result = [];
    for (let i = 0; i < end; i++) {
      result.push(begining + i); 
    }
    //console.log(result);
    return result;
  }
}

function sum([...number]) {
  let sumOfNumbers = 0; 
  for (let anyNumber of number) {
    sumOfNumbers += anyNumber;
  }
  return sumOfNumbers;
}

console.log(sum(range(1, 10)));