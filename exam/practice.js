'use strinct';


//IIFE -- zarojelbe tesszuk az egez functiont, plusz a vegen megegy (), igy automatikusan meghivodik a function amikor csinaljuk
(function () {
    console.log('alma');
})();

// Closures
// A functionok elerek a functionon kivuli valtozokat is, igy nem kell oket paramaterkent atadni
const name = 'Bond';
function greeter() {
    console.log('hello ' + name);
};
//Az olyan nyelvek amik ezt nem tamogatjak, ott parameterkent kene beadni, hogy Bond
function greeter(name) {
    console.log('hello ' + name);
};


//created anonymus function, assigned to a variable
let example = function(x) {
    return x * 3;
};

// Higher order functions -
//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 