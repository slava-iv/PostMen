var express = require('express');
var csv = require('csv-write-stream');
// var BEvent = require('./BEvent.js');

var app = module.exports = express();

// app.get('/csv', function(req, res, next) {
//   var writer = csv({
//     headers: ['id', 'name'],
//   });
//   writer.pipe(res);

//   BEvent.find({}, function(err, events) {
//     if (err) {
//       res.status(500).send('Can\'t fetch events');
//     } else {
//       events.forEach(function(event) {
//         writer.write([event._id, event.name]);
//       });
//     }
//     writer.end();
//   });
// });

app.get('/', function(req, res, next) {
  res.json({
    version: '1.0',
  });
});