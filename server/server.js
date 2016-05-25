var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var mongoose = require('mongoose');
var User = require('./schemas/user');
var Note = require('./schemas/note');

var app = express();
var upload = multer({dest: 'note_files/'});
app.use(bodyParser.json());

// Serve static files that babel compiled
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../compiled'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.urlencoded({extended: false}));

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  //'Content-Type': 'application/json'
};

// Mongodb connection
mongoose.connect('mongodb://localhost/notes');

// Routes
app.get('/notes', function(req, res) {
  Note.find({}).exec(function(err, notes) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(notes);
    }
  });
});

app.post('/notes', upload.single('note'), function(req, res) {
  console.log('Got request from react!');
  console.log('Body: ', req.body);
  console.log('File: ', req.file);
  console.dir(req.headers['content-type']);

  var newNote = new Note({
    url: __dirname + '/../note_files/' + req.file.filename,
    description: req.body.description,
    username: 'Andrew',
    likes: 0
  });
  newNote.save(function(err, newNote) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(newNote);
    }
  });
});

app.post('/search', function(req, res) {
  Note.find({description: req.body.search}).exec(function(err, notes) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(notes);
    }
  });
});

app.post('/note', function(req, res) {
  Note.findOne({url: req.body.url}).exec(function(err, note) {
    if (err) {
      res.status(500).send(err);
    } else {
      fs.readFile(note.url, 'utf8', function(err, contents) {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(contents);
        }
      });
    }
  });
});

app.listen(3000);