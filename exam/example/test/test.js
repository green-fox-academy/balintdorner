'use strict';

var test = require('tape');
var validator = require('./input.js');

test('test inputChecker', function (t) {
    var test1 = {
        "name": 'Balint Dornerfox',
        "feedback": 'awesome favorable super',
        "scale": 10
    };
    t.equal(validator(test1), true, 'name ends with fox');

    var test2 = {
        "name": 'namefox',
        "feedback": 'awesome favorable super',
        "scale": 15
    };
    t.equal(validator(test2), true, 'scale greater, than ten');

    var test3 = {
        "name": 'name',
        "feedback": 'awesome favorable super',
        "scale": 15
    };
    t.equal(validator(test3), false, 'name does not ends with fox');

    var test4 = {
        "name": 'FOX',
        "feedback": 'awesome favorable super',
        "scale": 9
    };
    t.equal(validator(test4), false, 'scale below ten');

    var test5 = {
        "name": 'almafox',
        "feedback": ' favorable super',
        "scale": 10
    };
    t.equal(validator(test5), false, 'just two valid feedback words');

    var test6 = {
        "name": 'cicafox',
        "feedback": 'awesome super',
        "scale": 10
    };
    t.equal(validator(test6), false, 'just two valid feedback words');

    var test7 = {
        "name": 'foximaxifox',
        "feedback": 'awesome favorable super cica',
        "scale": 10
    };
    t.equal(validator(test7), true, 'valid input');

t.end();
});
