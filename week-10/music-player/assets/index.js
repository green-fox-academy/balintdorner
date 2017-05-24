'use strict';

let xhr = new XMLHttpRequest();
let url = 'http://localhost:3000/playlists';

var getIndex = function() {
    xhr.open('GET', url, true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();

    xhr.onreadystatechange = function() {
        let list;
        if (xhr.readyState === XMLHttpRequest.DONE) {
            list = JSON.parse(xhr.response)
            console.log(list)
            for (let k = 0; k <list.length; k++) {
                playlistRender(list[k].title)
            }

        }
    }
}

getIndex();

function playlistRender(title) {

    var playlistsContainer = document.querySelector('.playlist');
    var playlistElement = document.createElement('div');
    var playlistName = document.createElement('span');
    var playlistDeleter = document.createElement('button');

    playlistsContainer.appendChild(playlistElement);
    playlistElement.appendChild(playlistName);
    playlistElement.appendChild(playlistDeleter);

    playlistName.innerText = title;
    playlistDeleter.innerText = 'X';
}

functi
