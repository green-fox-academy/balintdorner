const button = document.querySelector('button');
const div = document.querySelector('div');
const party = document.createElement('div');
div.appendChild(party);

function partyCreator() {
    if (party.className === 'party') {
        party.className = 'off';
    } else {
        party.className = 'party';
    };
};

button.addEventListener('click', partyCreator);
