#!/bin/env node
var express = require('express');
var url = require('url');
var fs = require('fs');
var path = require('path');
var ejs = require('ejs');

var app = module.exports = express();

// Auto render templates
var extension = 'html';
var dir = 'public';
app.set('views', '.');
app.engine(extension, ejs.__express);
app.use(function(req, res, next) {
  var pathname = url.parse(req.url).pathname;
  pathname = path.join(dir, pathname);

  fs.lstat(pathname, function(err, stats) {
    // Requests that match /dir will be interpreted as /dir/index
    if(!err && stats.isDirectory()) {
       pathname = path.join(pathname, 'index');
    }
    pathname += '.' + extension;

    fs.lstat(pathname, function(err, stats) {
      if(!err && stats.isFile()) {
        res.render(pathname, {enviroment: 'development'});
      } else {
        next();
      }
    });
  });
});

app.use(express.static(dir));
app.use('/lib', express.static('bower_components'));
process.env.PORT = process.env.PORT || 3000;
if (!module.parent) {
  app.listen(process.env.PORT);
  console.log('listening on port', process.env.PORT);
}