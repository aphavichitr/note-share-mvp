var express = require('express');
var mongoose = require('mongoose');
var browserify = require('browserify');
var react = require('react');
var jsx = require('node-jsx');

var app = express();

jsx.install();

var Notes = require('../client/index.js');



mongoose.connect('mongodb://localhost/notes');

app.listen(3000);