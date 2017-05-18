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

app.listen(3000, function() {
    console.log('server is running')
})

/*
//masodik megoldas
const query2 = {
    sql: "SELECT * FROM author WHERE country = ? AND home_city = ?",
    values:[country, city]
}

conn.query(query2,function(err,rows){
    if(err) {
        console.log("PARA", err.message);
    } else {
        console.log("Data received from Db:\n")
        rows.forEach(row => {
            console.log(row.aut_name);
            })
    }
});

conn.end();
*/
