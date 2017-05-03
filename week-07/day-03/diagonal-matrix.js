'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var size = 4;
var zero = '0';
var matrix = []
var matrix1 = []

for (var i = 0; i < size; i++) {
    matrix1.push(zero)
}

for (var i = 0; i < size; i++) {
    matrix[i] = matrix1
}


console.log(matrix)
