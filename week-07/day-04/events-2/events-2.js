const button = document.querySelector('button');
const list = document.querySelectorAll('li');
const paragraph = document.querySelector('p');

function itemCounter() {
    paragraph.textContent = list.length;
};

button.addEventListener('click', itemCounter);
