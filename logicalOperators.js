// false == undefined == null == 0 == "" == NaN

let decision1 = false && undefined;
console.log(decision1); // false

let decision2 = false || "a word";
console.log("this means true", decision2); // this means true a word