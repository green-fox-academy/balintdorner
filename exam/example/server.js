'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/passedexam', (req, res) => {
    res.send('this is the response');
});

app.post('/api/login/', (req, res) => {
    const email = req.body.data.attributes.email;
    const password = req.body.data.attributes.password;
    if ((email === user.data.attributes.email && password === user.data.attributes.password)) {
        res.send('valid user');
    } else {
        res.status(400).send('invalid user');
    };
});

app.listen(3000, () => {
    console.log('server is running');
});