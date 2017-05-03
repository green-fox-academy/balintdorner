'use strict';
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj = [3, 4, 5, 6, 7];

aj = aj.reverse()

console.log(aj)

var aj2 = []

for (var i = aj.length; i > 0; i--) {
    aj2.push(aj[i-1])
}

console.log(aj2)
