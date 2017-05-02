'use strict';

var lineCount = 15;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is
var percent = '%'
var whitespace = ' '
for (var i = 0; i <= lineCount; i++) {
    if (i === 0 || i === lineCount) {
        console.log(percent.repeat(lineCount));
    } else {
        console.log('%' + whitespace.repeat(lineCount-2) + '%');
    }
}
