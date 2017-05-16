'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use('/assets/', express.static('assets'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function(req, res) {
    var input = req.query.input;
    if (input !== 'undefined') {
        res.send({
        received: input,
        result: input*2
    })} else {
        console.log('Please input a number');
    }
});

app.get('/greeter', function(req, res) {
    var name = req.query.name;
    var title = req.query.title;
    if (name === undefined || title === undefined) {
        res.send({
            error: "Please provide a name!"
        })
    } else {
        res.send({
            welcome_message: "Oh, hi there " + name + ", my dear " + title + " !"
        })
    }
})

app.get('/appenda/:value', function(req, res) {
    var value = req.params.value
    res.send({
        appended: value + 'a'
    })
})

app.post('/dountil/:what', function(req, res) {
    var what = req.params.what;
    var until = req.body.until;

    var sum = function(num) {
        var total = 0;
        for (var i = 0; i < num; i++) {
            total += i;
        } return total
    }

    var fact = function(num) {
        var total = 1;
        for (var i = 1; i <= num; i++) {
            total *= i;
        } return total
    }
    if (what === 'sum') {
        res.send({
            "result": sum(until)
        })
    } else if (what === 'fact') {
        res.send({
            "result": fact(until)
        })
    }
})

app.listen(8080);
