'use strinct';


//IIFE -- zarojelbe tesszuk az egez functiont, plusz a vegen megegy (), igy automatikusan meghivodik a function amikor csinaljuk
(function () {
    console.log('alma');
})();

// Closures
// A functionok elerek a functionon kivuli valtozokat is, igy nem kell oket paramaterkent atadni
const name = 'Bond';
function greeter() {
    console.log('hello ' + name);
};
//Az olyan nyelvek amik ezt nem tamogatjak, ott parameterkent kene beadni, hogy Bond
function greeter(name) {
    console.log('hello ' + name);
};


//created anonymus function, assigned to a variable
let example = function(x) {
    return x * 3;
};

// Higher order functions -
//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// i.e.: filter, map

//built in methods splice, forEach, map, filter
let names = ['Bela', 'Atesz', 'Gabi', 'Jani', 'Peti', 'Gyuri']

//array.splice(honnan, mennyit, insertItem1, insertItem2, ...)
names.splice(2,4, 'Tibi')
//names = ['Bela', 'Atesz', 'Tibi']

//arr.forEach(function(elment, index, teljes lista)
names.forEach(function(element) {
    console.log(element);
});

//let new_array = arr.map(function callback(currentValue, index, array)
//egy uj arraybe teszi a function eredmenyet
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function(x) {
   return x * 2;
});

//let newArray = arr.filter(callback[, thisArg])
//egy uj arraybe teszi a functionbol fiterezett teteleket. itt a 6 betunel hosszabbakat
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let longWords = words.filter(function(word){
  return word.length > 6;
})


// //unit testing
// //main file
// const counter = function(number) {
//     let result = number * 2;
//     return result
// }

// module.exports = counter;

// //test file
// //npm install tape
// var test = require('tape');
// var count = require('main file eleresi utvonala')

// test('counter', function (t) {
//     let test1 = 3
//     t.equal(validator(test1), 6, 'egesz szamra jo');

//     var test2 = 0
//     t.equal(validator(test2), 0, 'nullaval jo');
// t.end();
// });


