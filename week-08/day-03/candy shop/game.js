var create = document.querySelector('.create-candies');
var buy = document.querySelector('.buy-lollypops');
var machine = document.querySelector('.candy-machine');
var candies = document.querySelector('.candies');
var lollypops = document.querySelector('.lollypops');
var speed = document.querySelector('.speed');
var numberOfCandies = 0;
var rate = 0;
var currentRate = 0;
var clicked = false

function createCandy() {
    numberOfCandies+= 50;
    candies.innerText = numberOfCandies;
}

function buyLollypops() {
    if (numberOfCandies >= 100) {
        numberOfCandies -= 100;
        candies.innerText = numberOfCandies;
        lollypops.innerText = lollypops.innerText + '🍭';
    }
}

function autoGenerator() {
    if (clicked === false) {
        rate = parseInt(lollypops.innerText.length/10/2);
        numberOfCandies += rate;
        candies.innerText = numberOfCandies;
    } else {
        numberOfCandies += rate;
        candies.innerText = numberOfCandies;
    }
}


document.
function displayRate() {
    speed.innerText = rate;
}

function speedUp() {
    rate *= 10;
    clicked = true;
}

create.addEventListener('click', createCandy);
buy.addEventListener('click', buyLollypops);
setInterval(autoGenerator, 1000)
setInterval(displayRate, 1000)
machine.addEventListener('click', speedUp)
