'use strict';

const handChecker = function(hand1) {
    let number = [];
    let type = [];
    let isStraightFlush = true;
    hand1.forEach(function(e) {
        number.push(e.slice(0, 1));
        type.push(e.slice(1));    
    })

    number = number.sort();
    number.forEach(function(e, i) {
        number[i] = parseInt(e)
    })

    for(let i = 0; i < number.length-1; i++) {
        if (number[i+1] !== number[i]+1) {  
            isStraightFlush = false;
        }
    }

    for(let i = 0; i < type.length-1; i++) {
        if (type[i+1] !== type[i]) {  
            isStraightFlush = false;
        }
    }

    return isStraightFlush
}

handChecker(["5H", "2H", "4H", "2H", "6H"])

/*  Magas lap
    Par
    Ket Par
    Drill
    Sor
    Flush
    Full
    Poker
    Straight flush
*/

module.exports = handChecker;