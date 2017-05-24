'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const playlist = [
    { "id": 1, "title": "Favorites", "system": 1},
    { "id": 2, "title": "Music for programming", "system": 0},
    { "id": 3, "title": "Driving", "system": 0},
    { "id": 5, "title": "Fox house", "system": 0},
];

const tracklist = [
	{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
	{ "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3"}
];

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    app.use('/assets/', express.static('assets'));
});

app.get('/playlists', function(req, res) {
    res.send(playlist);
});

app.get('/playlist-tracks', function(req, res) {
    res.send(tracklist);
});

app.listen(3000, function() {
    console.log('server is running');
})
