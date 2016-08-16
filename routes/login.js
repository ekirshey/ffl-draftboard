var pg = require('pg');
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

router.get('/league', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM leagues', function(err, result) {
           done();
           if (err)
            { console.error(err); response.send("Error " + err); }
           else
            { response.render('pages/league', {results: result.rows} ); }
        });
    });
});

module.exports = router;
