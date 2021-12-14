const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send(`
    <h1>Server is up and going</h1>`)
})

server.use('*', (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

module.exports = server;