'use strict';

//hogyan csinaljunk objektumokat 1.

function greet(name) {
    console.log('Hello ' + name);
};

greet('Joci');


//hogyan csinaljunk objektumokat 2. (first class function) -> ugy mukodik mint barmelyik masik variable, mint egy szam pl.

var koszonesi = greet;

koszonesi('Pako');


//hogyan csinaljunk objektumokat 3. A function maga objektum, lehet methodjuk.

greet.robika = 4;
console.log(greet.robika);


//hogyan csinaljunk objektumokat 4. Anonymus function. Ennek kell a vegere egy pontosvesszo, mert olyan, mintha egy szam lenne. Itt egy erteket adunk a variablenek.

var anonymus = function () {
    console.log('Marpedig en vagyok a fgv. nev nelkul');
};

anonymus();


//hogyan csinaljunk objektumokat 5. Anonymus masik modszere

(function () {
    console.log('Egy masik nev nelkuli fgv.');
})();
