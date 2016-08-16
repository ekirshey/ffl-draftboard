// Routes for root ('/') page
var pg = require('pg');
var cool = require('cool-ascii-faces');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
  response.render('pages/login');
});

router.get('/cool', function(request, response) {
    response.send(cool());
});

router.get('/times', function(request, response) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
        result += i + '';
    response.send(result);
});

module.exports = router;
