var image = document.querySelector('img');
console.log(image.getAttribute('src'));
image.setAttribute('src', 'en.jpg');

var link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

var buttonTwo = document.querySelectorAll('button');
buttonTwo[1].disabled = true;
buttonTwo[1].textContent = "Don't click me";
