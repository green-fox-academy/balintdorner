var whichPlayer = 1;
var addPlayer = document.querySelector('.addplayer')

var TwopointButton = document.querySelector('.twopoint')

function playerAdder() {
    var input = document.querySelector('input')
    var playersBox = document.querySelector('.playersbox');

    var player = document.createElement('article');
    player.className = 'player';

    playersBox.appendChild(player)

    var nameBox = document.createElement('div');
    var numberBox = document.createElement('div');
    var shotBox = document.createElement('div');
    var pointBox = document.createElement('div');
    var assistBox = document.createElement('div');
    var reboundBox = document.createElement('div');
    var stealBox = document.createElement('div');
    var blockBox = document.createElement('div');

    nameBox.innerText = input.value;
    nameBox.className = 'player';
    nameBox.id = input.value;
    var scoredPoint = 0;
    shotBox.innerText = scoredPoint;

    player.appendChild(nameBox);
    player.appendChild(numberBox);
    player.appendChild(shotBox);
    player.appendChild(pointBox);
    player.appendChild(assistBox);
    player.appendChild(reboundBox);
    player.appendChild(stealBox);
    player.appendChild(blockBox);

    function twoPointAdder() {
        document.onclick = function(e) {
            if (e.target.className === 'player') {
                playerId = e.target.id
            }
        }
        if (playerId === nameBox.id) {
            scoredPoint +=2
            shotBox.innerText = scoredPoint;
        }
    }

    TwopointButton.addEventListener('click', twoPointAdder)
}

var playerId;

/*function playerSelector() {
    document.onclick = function(e) {
        if (e.target.className === 'player') {
            playerId = e.target.id
        }
    }
}

playerSelector()
*/



addPlayer.addEventListener('click', playerAdder)
