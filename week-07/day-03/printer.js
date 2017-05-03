'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer() {
    console.log( Object.values(arguments));
}

printer(2, 4, 6, 'belu')
