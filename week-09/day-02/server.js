'use strict';

var express = require('express');

var app = express();

app.get('/', function(reg, res) {
    res.send('<a href="#">Ez itt a fooldal</a>.')
});

app.get('/five', function(req, res) {
    res.send('Almaaaa')
});

app.get('/object', function(reg, res) {
    res.send({
        name:"Balozska"
    })
});

app.get('/five/:lang', function(req, res) {
    //amit megadnak a bongeszoben lang parameterkent, azon a nyelven fogja kinyomji a szoveget a honlap
    var lang = req.params.lang;
    var fiveFunct = five(lang);
    res.send(fiveFunct());
});


app.listen(3000);
