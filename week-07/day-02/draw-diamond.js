'use strict';

var lineCount = 6;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var star = '*';
var whitespace = ' ';
for (var i = 1; i <= lineCount*2; i+=2) {
    console.log(whitespace.repeat(lineCount-i/2) + star.repeat(i));
}
for (var i = 3; i < lineCount*2; i+=2) {
    console.log(whitespace.repeat(i/2) + star.repeat(lineCount*2-i));
}
