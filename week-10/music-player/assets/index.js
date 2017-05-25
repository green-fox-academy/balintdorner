'use strict';
console.log('cica')
class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.url = 'http://localhost:3000/';
        console.log('alma');
    };

    request(method, endpoint, callback) {
        this.method = method;
        this.endpoint = endpoint;
        this.xhr.open(this.method, this.url+this.endpoint, true);
        this.xhr.setRequestHeader("Accept", "application/json");
        this.xhr.send();

        this.xhr.onreadystatechange = function() {
            this.response;
            if (this.xhr.readyState === XMLHttpRequest.DONE) {
                this.response = JSON.parse(this.xhr.response)
                callback(this.response);
    };
};

class Render {
    playlistRender(title) {

        var playlistsContainer = document.querySelector('.playlist');
        var playlistElement = document.createElement('div');
        var playlistName = document.createElement('span');
        var playlistDeleter = document.createElement('button');

        playlistsContainer.appendChild(playlistElement);
        playlistElement.appendChild(playlistName);
        playlistElement.appendChild(playlistDeleter);

        playlistName.innerText = title;
        playlistDeleter.innerText = 'X';
    };
};

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
