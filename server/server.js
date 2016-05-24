var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var mongoose = require('mongoose');

var app = express();
var upload = multer({dest: 'note_files/'});
//app.use(bodyParser.json());

// Serve static files that babel compiled
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get('/', function(req, res) {
  res.send();
});

app.post('/', upload.single('note'), function(req, res) {
  console.log('Got request from react!');
  console.log(req);
  console.log('Body: ', req.body);
  console.log('File: ', req.files);
  console.dir(req.headers['content-type']);

  fs.writeFile('./note_files/test.txt', req.file, (err) => {
    if (err) throw err;
    console.log('File saved');
    res.send('Successfully Posted!');
  });
});

mongoose.connect('mongodb://localhost/notes');

app.listen(3000);