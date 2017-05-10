/*Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed*/

var button = document.querySelector('button');
var p = document.querySelector('p');

var writer = setTimeout(function() {
    p.innerText = '2 seconds ellapsed';
    console.log('alma')
    console.log(p.innerText)
}, 2000)


button.addEventListener('click', writer)
