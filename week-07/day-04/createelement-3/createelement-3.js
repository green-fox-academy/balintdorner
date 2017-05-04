var listElements = document.querySelector('ul');
var listElementOne = document.querySelector('li');

listElements.removeChild(listElementOne);

var listitems = ['apple', 'bubble', 'cat', 'green fox'];

for (var i = 0; i < listitems.length; i++) {
    var newElement = document.createElement('li');
    newElement.textContent = listitems[i];
    listElements.appendChild(newElement);
}
