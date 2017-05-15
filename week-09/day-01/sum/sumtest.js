'use strict';

var test = require('tape');
var sum = require('./sum.js');

test('test sum', function (t) {
//    var list=[];
//    var actual = sum(list);
//    var expected = 0;

    t.equal(sum([]), 0, 'empty list');
    t.equal(sum([8]), 8, 'one element');
    t.equal(sum([1, 2, 3]), 6, 'multiple element');
    t.equal(sum([0]), 0, 'zero');
    t.equal(sum(['alma']), 0, 'string');
    t.equal(sum('alma'), 0, 'string');

  t.end();
});
