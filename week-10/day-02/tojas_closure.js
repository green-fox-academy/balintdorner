'use strict';

var alma = 4;


//az alma nem masolodik, hanem, a kulso erteket veszi fel. tehat, ha kozben megvaltoztatom az alma erteket, akkor azt az aktualis erteket fogja kinyomatni a printAlma.

function printAlma() {
    console.log(alma);
};

printAlma();
alma = 9;
printAlma();


// Ha az i-t varral hozzuk letre, akkor csak 10-et tud kiprintelni, ha lettel, akkor a printers[4], 4 lesz, mert az mindegyikre letrehoz egy valtozot.
var printers = [];
for (let i = 0; i < 10; i++) {
    printers.push(function () {
    console.log(i);
    })
}

printers[4]();


//a counter0 es a counter1 olyan mintha peldanyositanank. kozrezarjak a fgt-t, igy kulonbozo ertekeket tudunk visszaadni veluk
function getCounter() {
    var count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

var counter0 = getCounter();
counter0();
counter0();
counter0();

var counter1 = getCounter();
counter1();


function createCounterN(start) {
    return function () {
        start++;
        console.log(start);
    }
}

var counterFrom4 = createCounterN(4);
var counterFrom8 = createCounterN(8);

counterFrom4();
counterFrom4();
counterFrom4();

counterFrom8();
counterFrom8();
counterFrom8();
