'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

class Rectangles {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    getArea() {
        return this.a * this.b;
    }

    getCircumference() {
        return 2 * (this.a + this.b);
    }
};

var firstRect = new Rectangles(4, 6);
console.log(firstRect.getArea());
console.log(firstRect.getCircumference());


//with prototype

function Rectangles2(a,b) {
    this.a = a;
    this.b = b;
};

Rectangles2.prototype.getArea = function() {
    return this.a * this.b;
};

Rectangles2.prototype.getCircumference = function() {
    return 2 * (this.a + this.b);
};

var secondRect = new Rectangles2(10, 5)
console.log(secondRect.getArea());
console.log(secondRect.getCircumference());
