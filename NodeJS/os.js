// getting built-in os module
const os = require('os');
console.log(os);
console.log('free memory:', os.freemem());
console.log('total memory:', os.totalmem());