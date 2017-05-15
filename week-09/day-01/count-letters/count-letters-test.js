'use strict';

var test = require('tape');
var count = require('./count-letters.js');

test('test countLetters', function (t) {

    t.deepEqual(count(''), {}, 'no string');
    t.deepEqual(count('alma'), {a:2, l:1, m:1}, 'word with just lowercase');
    t.deepEqual(count('Alma'), {a:2, l:1, m:1}, 'Uppercase also included');
    t.deepEqual(count('cica12321cica'), {c:4, i:2, a:2 , 1:2, 2:2, 3:1 }, 'numbers also included');

  t.end();
});
