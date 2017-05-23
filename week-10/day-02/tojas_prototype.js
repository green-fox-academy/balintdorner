'use strict';

//konstruktor (a function Cat a konstruktor). a new ugy csinal, mintha a this-t egyenlove tennenk az audival.
/*function Car() {
    var this = {};
    this.km = 300;
    retuern this;
};*/

function Car() {
    this.km = 300;
};

Car.prototype.color = 'red';

var audi = new Car();
console.log(audi.km);
console.log(audi.color);

var bmw = new Car();
console.log(bmw.km);
console.log(bmw.color);
bmw.color = 'green';

var tesla = new Car();
console.log(tesla.km);
console.log(tesla.color);

Car.prototype.color = 'yellow';

console.log(audi.color);
console.log(tesla.color);
console.log(bmw.color);

//igy lehet new nelkul is. nem kotelezo a thises formulat hasznalni (tojas szerint ez a masodik a menobb)
function carFactory() {
    var car = {};
    car.km = 200;
    return car;
}

var trabant = carFactory();
console.log(trabant.km);


//javascript 2016ban ugyanezt le lehet irni igy. erre van a legnagyobb esely, hogy a cegnel, ahova kerulunk, ott ez lesz. de valszeg mindegyikkel fogunk talalkozni.
class Student {
    constructor() {
        this.firstName = 'Feri';
        this.lastName = 'Vagasi';
    }

    greet() {
        console.log(this.fistName, this.lastName);
    };
};

//es igy kell tojas szerint (factory pattern)
function createStudent() {
    var firstName = 'Feri';
    var lastName = 'Vagasi';

    function greet() {
        console.log(firstName, lastName);
    }

    return {
        greet: greet
    }
};

var feri2 = createStudent();
feri2.greet();
