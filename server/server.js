var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var mongoose = require('mongoose');
var User = require('./schemas/user');
var Note = require('./schemas/note');

var app = express();
var upload = multer({dest: 'note_files/'});
//app.use(bodyParser.json());

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

// Routes
app.get('/', function(req, res) {
  res.writeHead(headers);
  res.send();
});

app.post('/', upload.single('note'), function(req, res) {
  console.log('Got request from react!');
  // console.log(req);
  console.log('Body: ', req.body);
  console.log('File: ', req.file);
  console.dir(req.headers['content-type']);

  // var newNote = {
  //   url: 
  // }

  res.writeHead(headers);
  res.end();
});

// app.post('/*', upload.single('note'), function(req, res) {
//   console.log('Got request from react!');
//   // console.log(req);
//   console.log('Body: ', req.body);
//   console.log('File: ', req.file);
//   console.dir(req.headers['content-type']);

//   var url = req.file.filename;
//   var newNote = new Note({
//     url: url,
//     description: req.body.description,
//     username: 'Andrew',
//     likes: 0
//   });
//   newNote.save(function(err, newNote) {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(newNote);
//     }
//   });


//   res.writeHead(headers);
//   res.end();
// });

mongoose.connect('mongodb://localhost/notes');

app.listen(3000);