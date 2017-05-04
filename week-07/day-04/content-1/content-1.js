var heading = document.querySelector('head');
alert(heading.innerText);


var child = document.querySelectorAll('body p');
console.log(child[0]);

var child = document.querySelectorAll('body p');
alert(child[1].textContent);

var heading = document.querySelector('h1');
heading.textContent = 'New Content'

child[2].textContent = child[0].textContent
