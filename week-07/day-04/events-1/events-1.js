var button = document.querySelector('button');
var div = document.querySelector('div');
var party = document.createElement('div');
div.appendChild(party);

function partyCreator() {
    if (party.className === 'party') {
        party.className = 'off';
        console.log('alma');
    } else {
        party.className = 'party';
        console.log(party.getAttribute('class'));
    }
}

button.addEventListener('click', partyCreator)
