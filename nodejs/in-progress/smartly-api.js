'use strict';

const lodash = require('lodash');
const uuidv4 = require('uuid/v4');

const express = require('express');

const app = express();
app.use(express.json());

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

app.post('/api/user', (req, res) => {
    if (lodash.isEmpty(req.body)) {
        res.status(400).send('An error occurred!').end();
    }

    res.status(201).send('Successfully created user!').end();
});

app.post('/api/authenticate', (req, res) => {
    if (lodash.isEmpty(req.body)) {
        res.status(400).send('An error occurred!').end();
    }
});

app.post('/api/logout', (req, res) => {
    if (!req.header('authentication-header')) {
        res.status(400).send('An error occurred!').end();
    }

    res.status(200).send('Logged out successfully!').end();
});

app.post('/api/articles', (req, res) => {
  // ...
});

app.get('/api/articles', (req, res) => {
  // ...
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
