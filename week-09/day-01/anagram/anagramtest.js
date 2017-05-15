'use strict';

var test = require('tape');
var anagram = require('./anagram.js');

test('test anagramChecker', function (t) {

    t.equal(anagram('', ''), true, 'no string');
    t.equal(anagram('alma', 'alma'), true, 'same words');
    t.equal(anagram('alma', 'amla'), true, 'anagrams');
    t.equal(anagram('cica', 'kutya'), false, 'not anagrams');
    t.equal(anagram('almaalma', 'alma'), false, 'duplicated word');

  t.end();
});
