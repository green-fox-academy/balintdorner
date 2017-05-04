var itemsList = ['apple', 'banana', 'cat', 'dog'];

var listElements = document.querySelectorAll('li');

for (var i = 0; i < itemsList.length; i++) {
    listElements[i].textContent = itemsList[i]
}
