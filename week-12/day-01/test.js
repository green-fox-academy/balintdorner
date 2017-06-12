'use strict';

const test = require('tape');
const checker = require('./poker.js')
 
test('Straight flush checker', function (t) {    
    const hand1 = ["2H", "3H", "4H", "5H", "6H"]
    t.equal(checker(hand1), true, 'the hand is straight flush');

t.end();
});