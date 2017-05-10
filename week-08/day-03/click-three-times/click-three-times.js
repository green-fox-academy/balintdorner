/*Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times*/

var button = document.querySelector('button');
var p = document.querySelector('p');

var clicked = 0;
var counter = function() {
    ++clicked;
    console.log(clicked)
    return clicked;
}

var writer = function() {
    if (clicked === 3) {
        p.textContent ='5 seconds ellapsed and clicked 3 times';
    }
}

button.addEventListener('click', counter)

setTimeout(writer, 5000)
