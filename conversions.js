let data;
data = 20;
console.log(data, typeof data);     // 20 number

// number --> string
data = String(20);
// or
data = data.toString();
console.log(data, typeof data);     // 20 string

data = String(5 + 4);

// bool --> string
data = String(true);
console.log(data, typeof data);     // true string

// Date --> string
data = new Date();
console.log(data, typeof data);     // 2022-05-14T15:05:05.826Z object
data = String(new Date());
console.log(data, typeof data);     // Sat May 14 2022 18:08:52 GMT+0300 (GMT+03:00) string

// Array --> string
data = [1,2,3];
data = String([1,2,3])
console.log(data, typeof data);     // 1,2,3 string

// string --> number
data = Number("15");
console.log(data, typeof data);     // 15 number
data = parseInt("1.3");
console.log(data, typeof data, data.toFixed()); // 1 number 1
data = parseFloat("1.3");
console.log(data, typeof data, data.toFixed(2))  // 1.3 number 1.30

// bool --> number
data = Number(true);
console.log(data, typeof data);     // 1 number

// null --> number
data = Number(null);
console.log(data, typeof data);     // 0 number

// Array
data = Number([1,2,3]);
console.log(data, typeof data, data.toFixed());     // NaN number NaN
