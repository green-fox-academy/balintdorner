'use strict';

var test = require('tape');
var apple = require('./apple.js');

test('return string', function (t) {
  var actual = apple('alma');
  var expected = 'alma';

  t.equal(actual, expected);
  t.end();
});
