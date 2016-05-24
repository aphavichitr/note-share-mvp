var express = require('express');
//var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
// app.use(bodyParser);

// Serve static files that babel compiled
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
app.use(express.static(__dirname + '/../node_modules'));

// Routes
app.get('/', function(req, res) {
  res.send();
});

app.post('/', function(req, res) {
  console.log('Got request from react!');

});

mongoose.connect('mongodb://localhost/notes');

app.listen(3000);