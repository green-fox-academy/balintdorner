'use strict';

class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.url = 'http://localhost:3000/';
    };

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
    playlistRender(length, title) {
        for (var i = 0; i < length; i++) {
            var playlistsContainer = document.querySelector('.playlist');
            var playlistElement = document.createElement('div');
            var playlistName = document.createElement('span');
            var playlistDeleter = document.createElement('button');

            playlistsContainer.appendChild(playlistElement);
            playlistElement.appendChild(playlistName);
            playlistElement.appendChild(playlistDeleter);

            playlistName.innerText = title[i].title;
            playlistDeleter.innerText = 'X';
        }
    };
};

class Controller {
    constructor() {
        this.ajax = new Ajax();
        this.render = new Render();
    };

    drawing() {
        this.ajax.request('GET', 'playlists', this.render.playlistRender);
    };
};

var controller = new Controller();
controller.drawing();
