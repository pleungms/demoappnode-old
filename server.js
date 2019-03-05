// ############################################################################
// File Name: server.js
// Description:
//  Simple node.js application using express listening to port 80
// Author: Peter Leung (pleungms@hotmail.com)
// Modification history
//  Author         Date       Description
//  -------------- ---------- -------------------------------------------------
//  Peter Leung    13/09/2018 Initial version
//  Peter Leung    05/03/2019 Removed config
//
// ############################################################################
var express = require('express');
var app = express();

// Obtain the environment the application will run in
//var env = process.env.NODE_ENV || 'dev';
//var config = require('./config')[env];

// All routes
app.get('/', function (req, res) {
  console.log('http get...');
  res.send('Hello World!');
  //res.send('Hello World!');
});

// Create the server listening for http requests
app.listen(80, function () {
  console.log('Example app listening on port ' + this.address().port);
});