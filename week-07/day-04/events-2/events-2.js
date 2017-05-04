var button = document.querySelector('button');
var li = document.querySelectorAll('li');
var p = document.querySelector('p');

function itemCounter() {
    p.textContent = li.length
}

button.addEventListener('click', itemCounter)
