// getting built-in path module
const path = require('path');
console.log(path.parse(__filename));
console.log('filename:', path.parse(__filename).base);