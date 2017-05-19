const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reddit"
});

app.get('/hello', function get(req, res) {
    console.log('hello world')
})

app.get('/items', function get(req, res) {
    var allItems = "<ul>";
    conn.query("SELECT href FROM posts",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            rows.forEach(row => {
                allItems += '<li>' + row.href + '</li>'
            });
        }   allItems += '</ul>'
        res.send(allItems);
    });
})

app.get('/posts', function get(req, res) {

    var allItems = {"posts": 0}
    conn.query("SELECT * FROM posts",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            allItems.posts = rows;
        }
        res.send(allItems);
    });
})

app.post('/posts', function get(req, res) {
    const param = req.params.what;
    const title = req.body.title;
    const href = req.body.href;
    conn.query('INSERT INTO posts ( title, href, score, owner) VALUES( ' + '"' + title +'"' + ', "' + href + '" , "0", "Unknown");' ,function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        }
        res.status(200).send()
    });
})

app.listen(3000, function() {
    console.log('server is running')
})
