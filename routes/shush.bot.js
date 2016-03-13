'use strict';

// package modules
const router     = require('express').Router();
const bodyParser = require('body-parser');
const request    = require('request');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, function (req, res) {
  const body = req.body;
  const messageArr = [
    //'Do all of us need to hear you?',
    //'Please move to a breakout room',
    //'Let\'s play the quiet game',
    //'Remember you may be distracting others.',
    'Shhhh!!!'
  ];
  const message = messageArr[Math.floor(Math.random() * messageArr.length)];

  request.post({
    url: '<Webhook URL>',
    form: {
      payload: '{"channel": "' + body.text + '", "text": "' + message + '"}'
    }
  }, function(e, r, b) {
    res.send('I\'ve asked ' + body.text + ' to "' + message + '"');
  });
});

/**
 * Shush.Bot router.
 * @module shush.bot
 */
module.exports = router;
