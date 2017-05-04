var listElements = document.querySelector('ul');
var listElementOne = document.querySelector('li');

listElements.removeChild(listElementOne);

var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

for (var i = 0; i < planetData.length; i++) {
    if (planetData[i].asteroid === true) {
        var newElement = document.createElement('li');
        newElement.textContent = planetData[i].content;
        listElements.appendChild(newElement);
        newElement.setAttribute('class', planetData[i].category)
    }
}
