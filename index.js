'use strict';

// package modules
const express = require('express');

// custom modules
const shush   = require('./routes/shush.bot');

const app     = express();

app.set('port', process.env.PORT || 3000);
app.use('/shush', shush);

const server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
