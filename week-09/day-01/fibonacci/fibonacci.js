'use strict'

var fibonacciCounter = function(index) {
    if (index === 1) {
        return 1;
    } else if (index === 0) {
        return index === 1;
    } else {
        return fibonacciCounter(index-1) + fibonacciCounter(index-2);
    }
};

module.exports = fibonacciCounter
