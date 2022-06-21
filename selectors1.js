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
multiSelector[1].textContent = 'text changed!';

const p = document.createElement('p');
p.textContent = 'this from JS';
console.log(p);

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Button Clicked!');

    e.preventDefault();
    document.body.innerHTML = "";
})

document.getElementById("change-color").addEventListener("click",()=>{
    document.getElementById("change-color").style.color = "red";

})

