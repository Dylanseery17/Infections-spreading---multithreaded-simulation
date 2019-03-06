var express = require("express");
var path = require('path');
var app = express();


app.use(express.static(__dirname + ''));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req, res){
  res.render('index.html')
  //It will find and locate index.html from View or Scripts
});

module.exports = app;
