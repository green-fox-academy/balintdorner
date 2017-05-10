'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds



function apple() {
    console.log('apple')
}

function pear() {
    console.log('pear')
}

function melon() {
    console.log('melon')
}

function grape() {
    console.log('grape')
}

var multiplePrints = function() {
    apple()
    setTimeout(pear, 1000);
    setTimeout(melon, 3000);
    setTimeout(grape, 5000);
}

multiplePrints()
