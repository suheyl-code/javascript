// getting buit-in 'filesystem' module
const fs = require('fs');

// syncrones method
const files = fs.readdirSync('./NodeJS');
console.log(files);

// Asyncrones method
fs.readdir('./NodeJS', (err, files) =>{
  console.log(err);
  console.log(files);
});

