console.log(document.getElementById('title'));

const h1Tag = document.getElementById('title');
h1Tag.style.background = 'Green';
h1Tag.style.display = 'none';

const h2Tag = document.getElementById('h2');
h2Tag.textContent = 'This is h2';

const multiSelector = document.getElementsByClassName('ordered-list');
console.log(multiSelector[0]);
console.log(multiSelector[1]);
multiSelector[0].style.color = 'red';
multiSelector[1].textContent = 'text changed!'