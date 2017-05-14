var whichPlayer = 1;
var addPlayer; document.querySelector('.addplayer')

var closeShotMadeButton = document.querySelector('.closeshotmade')
var closeShotMadeButton = document.querySelector('.closeshotmade')

function playerAdder() {
    var input = document.querySelector('input')
    var playersBox = document.querySelector('.playersbox');

    var player = document.createElement('article');
    player.className = 'player';

    playersBox.appendChild(player)

    var nameBox = document.createElement('div');
    var numberBox = document.createElement('div');
    var closeShotMadeBox = document.querySelector('div');
    var closeShotMissedBox = document.querySelector('div');
    var middleRangeShotMadeBox = document.querySelector('div');
    var middleRangeShotMissedBox = document.querySelector('div');
    var threepointShotMadeBox = document.querySelector('div');
    var threepointShotMissedBox = document.querySelector('div');
    var assistBox = document.querySelector('div');
    var reboundBox = document.querySelector('div');
    var stealBox = document.querySelector('div');
    var blockBox = document.querySelector('div');
    var turnoverBox = document.querySelector('div');

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
            middleRangeShotMissed.innerText = middleRangeShotMissed;
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
    middleRangeShotMadeButton.addEventListener('click', MiddlerRangeShotMader)
    middleRangeShotMissedButton.addEventListener('click', MiddlerRangeShotMisser)
    threepointShotMadeButton.addEventListener('click', ThreePointShotMader)
    threepointShotMissedButton.addEventListener('click', ThreePointShotMisser)
    assistButton.addEventListener('click', ThreePointShotMisser)
}

var playerId;

addPlayer.addEventListener('click', playerAdder)
