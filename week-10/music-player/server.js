'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
    app.use('/assets/', express.static('assets'));
});

app.listen(3000, function() {
    console.log('server is running');
})
