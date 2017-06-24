// Server side app

var express = require('express');
var path = require('path');
var app = express()

app.use('/',express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname, '/static/html/index.html'));
});

app.get('/visualization', function(req, res) {
    res.sendfile(path.join(__dirname, '/static/html/visualization.html'));
});

var server = app.listen(8999, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://140.112.42.81:8999');
});
