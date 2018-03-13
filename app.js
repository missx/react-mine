var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expenses = require('./server/routes/expenses');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/expenses', expenses);

// Set the public folder
app.use(express.static(__dirname + '/public'));

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
  });
  
mongoose.connection.on("error", function(err) {
    console.log("Could not connect to mongo server!");
});

var mongoURI = 'mongodb://ximenita:N3k0U53r@ds211029.mlab.com:11029/react-test';

mongoose.connect(mongoURI);

app.listen(8000, function() {
    console.log('App is running on port 8000');
});


