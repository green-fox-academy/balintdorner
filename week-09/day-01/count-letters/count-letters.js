'use strict';

let countLetters = function(string) {
    let arrayOfLetters = string.toString().toLowerCase().split('');
    let obj = {};
    arrayOfLetters.forEach(function (letter) {
        if (letter in obj) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    });
    return obj;
}

module.exports = countLetters;
