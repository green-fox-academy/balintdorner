'use strict';

class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.url = 'http://localhost:3000/';
    };

    requestPlaylist(method, endpoint, callback) {
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

    requestTracklist(method, endpoint, callback) {
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
    playlistRender(length, title) {
        for (var i = 0; i < length; i++) {
            const playlistsContainer = document.querySelector('.playlist');
            const playlistElement = document.createElement('div');
            const playlistName = document.createElement('span');
            const playlistDeleter = document.createElement('button');

            playlistsContainer.appendChild(playlistElement);
            playlistElement.appendChild(playlistName);
            playlistElement.appendChild(playlistDeleter);

            playlistName.innerText = title[i].title;
            playlistDeleter.innerText = 'X';
        }
    };

    tracklistRender(length, data) {
        for (var i = 0; i < length; i++) {
            const tracklistContainer =  document.querySelector('.tracklist');
            const tracklistElement = document.createElement('div');
            const trackID = document.createElement('span');
            const trackTitle = document.createElement('span');
            const trackDuration = document.createElement('span');

            tracklistContainer.appendChild(tracklistElement);
            tracklistElement.appendChild(trackID);
            tracklistElement.appendChild(trackTitle);
            tracklistElement.appendChild(trackDuration);

            tracklistElement.className = 'track';
            trackID.innerText = i+1;
            trackTitle.innerText = data[i].title + ' ' + data[i].artist;
            trackDuration.innerText = function() {
                let minutes = parseInt(data[i].duration/60);
                let seconds = parseInt(data[i].duration%60);
                if (seconds < 10) {
                    seconds = '0' + seconds;
                };
                if (minutes < 10) {
                    minutes = '0' + minutes;
                };
                let timeMinSec = minutes + ':' + seconds;
                return timeMinSec
            }();
        };
    };
};

class Controller {
    constructor() {
        this.playlistAjax = new Ajax();
        this.tracklistAjax = new Ajax();
        this.render = new Render();
    };

    drawingPlaylist() {
        this.playlistAjax.requestPlaylist('GET', 'playlists', this.render.playlistRender);
    };

    drawingTracklist() {
        this.tracklistAjax.requestTracklist('GET', 'playlist-tracks', this.render.tracklistRender);
    };
};

var controller = new Controller();
controller.drawingPlaylist();
controller.drawingTracklist();
