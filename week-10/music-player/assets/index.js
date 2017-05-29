'use strict'

class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.url = 'http://localhost:3000/';
    };

    alma() {
        console.log('alama')
    }

    request(method, endpoint, callback) {
        this.method = method;
        this.endpoint = endpoint;
        this.xhr.open(this.method, this.url + this.endpoint, true);
        this.xhr.setRequestHeader("Accept", "application/json");
        this.xhr.send();

        this.xhr.onreadystatechange = function() {
            this.response;
            if (this.xhr.readyState === XMLHttpRequest.DONE) {
                if (this.xhr.status === 200) {
                    this.response = JSON.parse(this.xhr.response)
                    callback(this.response.length, this.response);
                };
            };
        }.bind(this);
    };
};


class Render {

    playlist(length, title) {

        for (let i = 0; i < length; i++) {
            console.log(title[i].id)
            this.playlistsContainer = document.querySelector('.playlist');
            l playlistElement = document.createElement('div');
            this.playlistName = document.createElement('span');
            this.playlistDeleter = document.createElement('button');

            this.playlistsContainer.appendChild(playlistElement);
            playlistElement.appendChild(this.playlistName);
            playlistElement.appendChild(this.playlistDeleter);

            this.playlistName.innerText = title[i].title;
            this.playlistDeleter.innerText = 'X';
            playlistElement.id = title[i].id;
            console.log(playlistElement)
            /*playlistElement.addEventListener('click', function() {
                this.clickAjax = new Ajax();
                this.render = new Render();
                this.clickAjax.request('GET', 'playlist-tracks', this.render.tracklist.bind(this.Render));
            });*/
            playlistElement.addEventListener('click', function() {
                this.clickAjax = new Ajax();
                this.render = new Render();
                this.tracklistContainer.innerHTML = '';
                console.log(playlistElement)
                this.endpoint = 'playlist-tracks?playlist=' + playlistElement.id;
                this.clickAjax.request('GET', this.endpoint, this.render.tracklist.bind(this));
            }.bind(this));
        };
    };

    tracklist(length, data) {
        for (var i = 0; i < length; i++) {
            this.tracklistContainer =  document.querySelector('.tracklist');
            this.tracklistElement = document.createElement('div');
            this.trackID = document.createElement('span');
            this.trackTitle = document.createElement('span');
            this.trackDuration = document.createElement('span');

            this.tracklistContainer.appendChild(this.tracklistElement);
            this.tracklistElement.appendChild(this.trackID);
            this.tracklistElement.appendChild(this.trackTitle);
            this.tracklistElement.appendChild(this.trackDuration);

            this.tracklistElement.className = 'track';
            this.trackID.innerText = i+1;
            this.trackTitle.innerText = data[i].title + ' ' + data[i].artist;
            this.trackDuration.innerText = function() {
                let minutes = parseInt(data[i].duration/60);
                let seconds = parseInt(data[i].duration%60);
                if (seconds < 10) {
                    seconds = '0' + seconds;
                };
                if (minutes < 10) {
                    minutes = '0' + minutes;
                };
                let timeMinSec = minutes + ':' + seconds;
                return timeMinSec;
            }();
        };
    };
};


/*class Eventlisteners {
    drawingTracklistOnClick() {
        this.tracklistAjax.request('GET', 'playlist-tracks' + this.playlistElement.id, this.render.tracklist.bind(this.render));
    }
}*/


class Controller {
    constructor() {
        this.playlistAjax = new Ajax();
        this.tracklistAjax = new Ajax();
        this.render = new Render();
    //    this.evenetlisteners = new evenetlisteners();
    };

    drawingPlaylist() {
        this.playlistAjax.request('GET', 'playlists', this.render.playlist.bind(this.render));
    };

    drawingTracklist() {
        this.tracklistAjax.request('GET', 'playlist-tracks', this.render.tracklist.bind(this.render));
    };

    /*whoKnows(reponseLength, response) {
        this.render.tracklist(reponseLength, response);
    };*/
};

var controller = new Controller();
controller.drawingPlaylist();
controller.drawingTracklist();
