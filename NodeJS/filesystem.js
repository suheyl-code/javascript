// getting buit-in 'filesystem' module
const fs = require("fs");

// syncrones method
const files = fs.readdirSync("./NodeJS");
console.log(files);

// Asyncrones method, Node is Asyncrones by default.
fs.readdir("./NodeJS", (err, files) => {
  console.log(err);
  console.log(files);
});

fs.readFile("./NodeJS/os.js", (err, data) => {
  if (err) console.error(err);
  console.log(data);
});
