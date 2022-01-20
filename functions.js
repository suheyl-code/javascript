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