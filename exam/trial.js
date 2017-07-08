'use strict';

const matrix = [
    [1, 2, 3, 4, 5],
    [7, 8, 9, 10, 11],
    [5, 6, 7, 8, 9]
];

let total = 0;

for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        total += matrix[i][j];
    };
};
