'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

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
            return;
        }
        res.send(rows);
        return;
    });
    return;
});

app.get('/playlist-tracks', function(req, res) {
    var playlist = req.query.playlist;
    var item = [];
    conn.query("SELECT * FROM tracklist",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            if (playlist === undefined) {
                res.send(rows);
                return;
            } else {
                rows.forEach(row => {
                    if( playlist == row.playlist) {
                        item.push(row);
                    }
                });
            }
            res.send(item);
            return;
        }
    });
    return;
});

app.listen(3000, function() {
    console.log('server is running');
})
