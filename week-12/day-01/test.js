'use strict';

const test = require('tape');
const checker = require('./poker.js')
 
test('Straight flush checker1', function (t) {    
    const hand1 = ["5H", "3H", "4H", "2H", "6H"]
    t.equal(checker(hand1), 'straightflush', 'the hand is straight flush');
    
    const hand2 = ["5A", "3H", "4H", "2H", "6H"]
    t.equal(checker(hand2), 'straight', 'the hand is straight but not flush');

    const hand3 = ["5H", "5H", "4H", "2H", "6H"]
    t.equal(checker(hand3), 'flush', 'the hand is flush but not straight');

t.end();
});