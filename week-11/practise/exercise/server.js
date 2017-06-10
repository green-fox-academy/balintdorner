'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo"
});

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    app.use('/assets/', express.static('assets'));
});

app.get('/todos', function(req, res) {
    var id = req.query.id;
    var item = [];
    conn.query("SELECT * FROM todos",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            if (id === undefined) {
                res.send(rows);
                return;
            } else {
                rows.forEach(row => {
                    if( id == row.id) {
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

app.post('/posts', function get(req, res) {
    const title = req.body.title;
    const  = req.body.href || 'not';
    conn.query('INSERT INTO todos ( title, status) VALUES( ' + '"' + title +'"' + ', "' + status + '"' ,function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        }
        res.status(200).send()
    });
})

app.listen(3000, function() {
    console.log('server is running');
})
