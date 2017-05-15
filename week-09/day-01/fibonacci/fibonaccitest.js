'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci.js');

test('test fibonacciLetters', function (t) {

    t.deepEqual(fibonacci(0), 1, '');
    t.deepEqual(fibonacci('alma'), {a:2, l:1, m:1}, 'word with just lowercase');
    t.deepEqual(fibonacci('Alma'), {a:2, l:1, m:1}, 'Uppercase also included');
    t.deepEqual(fibonacci('cica12321cica'), {c:4, i:2, a:2 , 1:2, 2:2, 3:1 }, 'numbers also included');

  t.end();
});
