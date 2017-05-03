'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(number) {
    var total = 0
    for (var i = 0; i <= number; i++) {
        total += i
    }
    console.log(total)
}

sum(5)
