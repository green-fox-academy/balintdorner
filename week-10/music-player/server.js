'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "disco"
});

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    app.use('/assets/', express.static('assets'));
});

app.get('/playlists', function(req, res) {
    conn.query("SELECT * FROM playlists",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        }
        res.send(rows);
    });
});

app.get('/playlist-tracks', function(req, res) {
    var id = req.query.id;
    var item;
    conn.query("SELECT * FROM tracklist",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            if (id === undefined) {
                res.send(rows);
            } else {
                rows.forEach(row => {
                    if( id == row.ID) {
                        item = row;

                    }
                });
            } res.send(item);
        }

    });
});

app.listen(3000, function() {
    console.log('server is running');
})
