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
  database: "bball"
});



app.get('/', function get(req, res) {

    var player = document.querySelector('players.')

    var parameters = [];

    var query3 = "SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id"

    var add  = (parameters.length > 0)? ' WHERE ': '';
    add += parameters.join(' AND ');

    var fullData = "<table><tr><th>book title</th><th>author name</th><th>category</th><th>publisher name</th><th>price</th></tr>";
    conn.query(query3+add+';',function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            rows.forEach(row => {
                fullData += '<tr>' + '<td>' + row.book_name + '</td>' + '<td>' + row.aut_name + '</td>' + '<td>' + row.cate_descrip + '</td>' + '<td>' + row.pub_name + '</td>' + '<td>' + row.book_price + '</td>' + '</tr>'
            });
        }   fullData += '</table>'
        res.send(fullData);
    });
})
app.listen(3000, function() {
    console.log('server is running')
})
