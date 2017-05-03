'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function studentLister(object) {
    var student = '';
    for (var i = 0; i < object.length; i++) {
        if (object[i]['candies'] > 4) {
        student += object[i]['name']
    }}
    return student;
}

function candyAvgCounter(object) {
    var total = 0;
    var avg = 0;
    for (var i = 0; i < object.length; i++) {
        total += object[i]['candies']
        avg = total/4
    }
    return avg;
}

console.log(studentLister(students));
console.log(candyAvgCounter(students));
