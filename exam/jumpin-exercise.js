'use strict';

// 8. Create a function that takes two arrays and mixes them like this: [1, 2, 3] and [6, 7, 8] becomes [1, 6, 2, 7, 3, 8]

function arrayMixer(array1, array2) {
    let mixedArray = [];
    for (let i = 0; i < array1.length; i++) {
        mixedArray.push(array1[i], array2[i]);
    };
    return mixedArray;
};

console.log(arrayMixer([1, 2, 3], [6, 7, 8]));