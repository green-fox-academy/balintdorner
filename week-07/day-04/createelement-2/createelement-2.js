var listElements = document.querySelector('ul');
var listElementOne = document.querySelector('li');

listElements.removeChild(listElementOne);

for (var i = 0; i < 3; i++) {
    var newElement = document.createElement('li');
    newElement.textContent = 'The Fox';
    listElements.appendChild(newElement);
}
