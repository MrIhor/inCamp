const express = require('express');
const router = require('./routes');
const app = express();

function logRequest({method, url}, res, next) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next();
}

app.use(express.json());
app.use(logRequest);
app.use(router);

module.exports = app;