function max(...numbers) {
    let result = -Infinity;
    for(let number of numbers) {
        if (number > result) {
            result = number;
        }
    }
    return result;
}
console.log(max(1,46,2,7,4,87));

function min(...numbers){
    let result = +Infinity;
    for(let number of numbers) {
        if(number < result) {
            result = number;
        }
    }
    return result;
}
console.log(min(46,1,2,7,4,87));

function greeting(name) {
    console.log("Hello, " + name);
}
greeting("Sam");
let res = greeting("James");
console.log(res);

function square(number) {
    return number * number;
}
let result = square(3);
console.log(result);


let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { console.log("drawing...")}
};
circle.draw();


function createCircle(radius) {
    return {
        radius,
        draw(){console.log("drawing...")}
    }
}
let circle2 = createCircle(2);
circle2.draw();

// Arow Function
const aFunc = (a, b) => a + b;
console.log(aFunc(2, 3));


(function() {
    console.log("this is a function!");
})();

