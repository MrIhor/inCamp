const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes');

function logRequest({ method, url }, res, next) {
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logRequest);
app.use(router);

module.exports = app;
