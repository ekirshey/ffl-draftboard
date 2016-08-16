var pg = require('pg');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
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

router.get('/manage', function(request, response) {
    response.render('pages/leaguemanager');
});

module.exports = router;
