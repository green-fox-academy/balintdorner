'use strict';

const slicer = function(hand1) {
    let number = [];
    let type = [];
     hand1.forEach(function(e) {
        number.push(e.slice(0, 1));
        type.push(e.slice(1));    
    })

    number = number.sort();
    number.forEach(function(e, i) {
        number[i] = parseInt(e)
    })
    return number, type
}

const straightChecker = function(number) {
    let isStraight = true;

    for(let i = 0; i < number.length-1; i++) {
        if (number[i+1] !== number[i]+1) {  
            isStraight = false;
        }
    }
    return isStraight
}

const flushChecker = function(type) {     
    let isFlush = true;
   
    for(let i = 0; i < type.length-1; i++) {
        if (type[i+1] !== type[i]) {  
            isFlush = false;
        }
    }
    return isFlush
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