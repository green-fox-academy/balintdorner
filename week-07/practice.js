'use strict';

let star = '*';
let space = ' ';

// for (let i = 0; i < 5; i++) {
//     console.log(star.repeat(i))
// }

function printer(lines) {
    for (let i = 0; i < lines; i++) {
        if (i % 2 === 1) {
            console.log(space.repeat((lines-i) / 2) + star.repeat(i))
        }
    }
}

printer(9)