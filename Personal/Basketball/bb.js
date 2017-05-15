var whichPlayer = 1;
var addPlayer = document.querySelector('.addplayer');
var playerId;


var closeShotMadeButton = document.querySelector('.closeshotmade');
var closeShotMissedButton = document.querySelector('.closeshotmissed');
var middleRangeShotMadeButton = document.querySelector('.middlerangeshotmade');
var middleRangeShotMissedButton = document.querySelector('.middlerangeshotmissed');
var threepointShotMadeButton = document.querySelector('.threepointshotmade');
var threepointShotMissedButton = document.querySelector('.threepointshotmissed');
var assistButton = document.querySelector('.assist');
var reboundButton = document.querySelector('.rebound');
var stealButton = document.querySelector('.steal');
var blockButton = document.querySelector('.block');
var turnoverButton = document.querySelector('.turnover');



function playerAdder() {
    var input = document.querySelector('input')
    var playersBox = document.querySelector('.playersbox');

    var player = document.createElement('article');
    player.className = 'player';

    playersBox.appendChild(player)

    var nameBox = document.createElement('div');
    var numberBox = document.createElement('div');
    var closeShotMadeBox = document.createElement('div');
    var closeShotMissedBox = document.createElement('div');
    var middleRangeShotMadeBox = document.createElement('div');
    var middleRangeShotMissedBox = document.createElement('div');
    var threepointShotMadeBox = document.createElement('div');
    var threepointShotMissedBox = document.createElement('div');
    var assistBox = document.createElement('div');
    var reboundBox = document.createElement('div');
    var stealBox = document.createElement('div');
    var blockBox = document.createElement('div');
    var turnoverBox = document.createElement('div');

    var closeShotMade = 0;
    var closeShotMissed = 0;
    var middleRangeShotMade = 0;
    var middleRangeShotMissed = 0;
    var threepointShotMade = 0;
    var threepointShotMissed = 0;
    var assist = 0;
    var rebound = 0;
    var steal = 0;
    var block = 0;
    var turnover = 0;

    nameBox.innerText = input.value;
    nameBox.className = 'player';
    nameBox.id = input.value;
    closeShotMadeBox.innerText = closeShotMade;
    closeShotMissedBox.innerText = closeShotMissed;
    middleRangeShotMadeBox.innerText = middleRangeShotMade;
    middleRangeShotMissedBox.innerText = middleRangeShotMissed;
    threepointShotMadeBox.innerText = threepointShotMade;
    threepointShotMissedBox.innerText = threepointShotMissed;
    assistBox.innerText = assist;
    reboundBox.innerText = rebound;
    stealBox.innerText = steal;
    blockBox.innerText = block;
    turnoverBox.innerText = turnover;



    player.appendChild(nameBox);
    player.appendChild(numberBox);
    player.appendChild(closeShotMadeBox);
    player.appendChild(closeShotMissedBox);
    player.appendChild(middleRangeShotMadeBox);
    player.appendChild(middleRangeShotMissedBox);
    player.appendChild(threepointShotMadeBox);
    player.appendChild(threepointShotMissedBox);
    player.appendChild(assistBox);
    player.appendChild(reboundBox);
    player.appendChild(stealBox);
    player.appendChild(blockBox);
    player.appendChild(turnoverBox);

    function CloseShotMader() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            closeShotMade++
            closeShotMadeBox.innerText = closeShotMade;
        }
    }

    function CloseShotMisser() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            closeShotMissed++
            closeShotMissedBox.innerText = closeShotMissed;
        }
    }

    function MiddleRangeShotMader() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            middleRangeShotMade++
            middleRangeShotMadeBox.innerText = middleRangeShotMade;
        }
    }

    function MiddleRangeShotMisser() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            middleRangeShotMissed++
            middleRangeShotMissedBox.innerText = middleRangeShotMissed;
        }
    }

    function ThreePointShotMader() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            threepointShotMade++
            threepointShotMadeBox.innerText = threepointShotMade;
        }
    }

    function ThreePointShotMisser() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            threepointShotMissed++
            threepointShotMissedBox.innerText = threepointShotMissed;
        }
    }

    function Assister() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            assist++
            assistBox.innerText = assist;
        }
    }

    function Rebounder() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            rebound++
            reboundBox.innerText = rebound;
        }
    }

    function Blocker() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            block++
            blockBox.innerText = block;
        }
    }

    function Stealer() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            steal++
            stealBox.innerText = steal;
        }
    }

    function Turnoverer() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            turnover++
            turnoverBox.innerText = turnover;
        }
    }

    closeShotMadeButton.addEventListener('click', CloseShotMader)
    closeShotMissedButton.addEventListener('click', CloseShotMisser)
    middleRangeShotMadeButton.addEventListener('click', MiddleRangeShotMader)
    middleRangeShotMissedButton.addEventListener('click', MiddleRangeShotMisser)
    threepointShotMadeButton.addEventListener('click', ThreePointShotMader)
    threepointShotMissedButton.addEventListener('click', ThreePointShotMisser)
    assistButton.addEventListener('click', Assister)
    reboundButton.addEventListener('click', Rebounder)
    stealButton.addEventListener('click', Stealer)
    blockButton.addEventListener('click', Blocker)
    turnoverButton.addEventListener('click', Turnoverer)
}

addPlayer.addEventListener('click', playerAdder);
