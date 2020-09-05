const express = require('express');

const app = express();



app.use(require('./location'));

module.exports = app;