var asteroids = document.querySelector('ul.asteroids');
var newItem = document.createElement('li');
var newItemTwo = document.createElement('li');

newItem.textContent = 'The Green Fox';
newItemTwo.textContent = 'The Lamplighter';

asteroids.appendChild(newItem);
asteroids.appendChild(newItemTwo);


var container = document.querySelector('div');
var heading = document.createElement('h1');
var image = document.createElement('img')

heading.textContent = 'I can add elements to the DOM!';
image.setAttribute('src', 'http://edesviz.hu/files/edesviz/Magazin/alma.jpg');

container.appendChild(heading);
container.appendChild(image);
