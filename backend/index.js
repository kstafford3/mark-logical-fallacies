var express = require('express');
var ioredis = require('ioredis');
var bodyParser = require('body-parser');

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var redis = new ioredis();

app.get('/get-fallacies', function (req, res) {
    var url = req.query.url;
    redis.get(url).then(function(result) {
        var annotationsStringified = result || "{}";
        var annotations = JSON.parse(annotationsStringified);
        res.json(annotations); 
    });
});

app.post('/add-fallacy', function(req, res) {
    var url = req.body.url;
    var selector = req.body.selector;
    var fallacyKey = req.body.content;
    
    redis.get(url).then(function(result) {
        var annotationsStringified = result || "{}";
        var annotations = JSON.parse(annotationsStringified);
        annotations[selector] = annotations[selector] || [];
        if(annotations[selector].indexOf(fallacyKey) === -1) {
            annotations[selector].push(fallacyKey);
        }
        redis.set(url, JSON.stringify(annotations));
        res.sendStatus(200);
    });
});

app.listen(8080, function () {});