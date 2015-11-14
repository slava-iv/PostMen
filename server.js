var net = require('net');
var http = require('http');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// require('./setupDatabase');

net
  .createServer(require('./src/ControllerEventsListener'))
  .listen(5000, function() {
    console.log('Events listener is ready on 5000');
  });

net
  .createServer(require('./src/GameEventsProvider'))
  .listen(5001, function() {
    console.log('Events provider is ready on 5001');
  });

http
  .createServer(require('./src/StatisticsProvider'))
  .listen(process.env.PORT || 8080, function() {
    console.log('Statistics provider is ready on 8080');
  });