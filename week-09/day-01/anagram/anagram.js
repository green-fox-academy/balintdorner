/*Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that.*/

var anagramChecker = function(string1, string2) {
    let boolean = false;
    if (string1.split('').sort().join('') === string2.split('').sort().join('')) {
        boolean = true;
    };
    return boolean;
};

module.exports = anagramChecker
