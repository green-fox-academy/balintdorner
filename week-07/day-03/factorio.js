'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
    var total = 1
    for (var i = 1; i <= number; i++) {
        total *= i
    }
    console.log(total)
}

factorio(5)
