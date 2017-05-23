'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

class Animals {
    constructor(voice) {
        this.voice = voice;
    }

    say() {
        console.log(this.voice)
    }
};

var cat = new Animals('miauiuu');
cat.say();


function Animals2(says) {
    this.says = says;
};

Animals2.prototype.say = function() {
    console.log(this.says);
};

var cattie = new Animals2('woff');
cattie.say()
