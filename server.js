// var net = require('net');

// require('./src/setupDatabase');

// net
//   .createServer(require('./src/RequestController'))
//   .listen(process.env.PORT || 8080, function() {
//     console.log('Statistics provider is ready on 8080');
//   });

var express = require('express');

var app = express();

app.use('/', function(req, res) {
  res.json({ test: 1 });
});

app.listen(process.env.PORT || 8080);