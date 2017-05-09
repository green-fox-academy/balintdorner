/*Create an Animal constructor

Every animal has a hunger value, which is a number
Every animal has a thirst value, which is a number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
Create a Farm constructor

Every farm has list of Animals
Every farm has slots which defines the number of free places for animals
Every farm can breed() which creates a new animal if there's place for it
Every farm can slaughter() which removes the least hungry animal*/

function animal(hunger=50, thirst=50) {
    this.hunger = hunger;
    this.thirst = thirst;
}

function eat(animal) {
    animal.hunger--;
}

function drink(animal) {
    animal.thirst--;
}

function play(animal) {
    animal.hunger++;
    animal.thirst++;
}

function farm() {
    this.animalList = [];
    this.slots = 3;
    this.breed = function(animal) {
        if (this.slots > 0) {
            this.animalList.push(animal);
            this.slots--;
        }
    };
    this.slaughter = function() {
        var hungry = 1000;
        var animalNumber = 0;
        for (var i = 0; i < this.animalList.length; i++) {
            if (hungry > this.animalList[i].hunger) {
                hungry = this.animalList[i].hunger
                animalNumber = i
            }
        }
        delete this.animalList[animalNumber]
    };
}

lion = new animal();
cat = new animal();
sharp = new animal();
farm = new farm();
farm.breed(lion)
farm.breed(cat)
farm.breed(sharp)
eat(lion)
eat(lion)
eat(cat)
eat(cat)
eat(cat)
eat(sharp)
eat(sharp)
eat(sharp)
eat(sharp)
console.log(farm)
farm.slaughter()
console.log(farm)
