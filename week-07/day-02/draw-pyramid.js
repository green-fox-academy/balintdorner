'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var star = '*';
var whitespace = ' ';
for (var i = 1; i <= lineCount*2; i+=2) {
    console.log(whitespace.repeat(lineCount*2-i/2) + star.repeat(i));
}
