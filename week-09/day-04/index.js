const mysql = require('mysql');
const express = require('express');
var app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

//elso megoldas
const country = 'USA';
const city = 'Atlanta';
const query = "SELECT * FROM author WHERE country = ? AND home_city = ?"

app.get('/', function get(req, res) {
    var result = [];
    conn.query(query, [country, city],function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            rows.forEach(row => {
                result.push(row.aut_name);
                console.log(result)
            });
        }
        console.log(result)
        res.send(result);
    });
})

app.get('/booknames', function get(req, res) {
    var cateDescrip = "<ul>";
    conn.query("SELECT book_name FROM book_mast",function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            rows.forEach(row => {
                cateDescrip += '<li>' + row.book_name + '</li>'
            });
        }   bookNames += '</ul>'
        res.send(bookNames);
    });
})

app.get('/fulldata', function get(req, res) {

    var cateDescrip = req.query.cate_descrip;
    var pubName = req.query.pub_name;
    var plt = req.query.plt;
    var pgt = req.query.pgt;

    var parameters = [];

    if (cateDescrip !== undefined) {
        parameters.push('cate_descrip = ' + '"' + cateDescrip + '"');
    }

    if (pubName !== undefined) {
        parameters.push('pub_name = ' + '"' + pubName + '"');
    }

    if (plt !== undefined) {
        parameters.push('book_price <  ' + '"' + plt + '"');

    }

    if (pgt !== undefined) {
        parameters.push('book_price > ' + '"' + pgt + '"');
    }


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
