var net = require('net');

require('./setupDatabase');

net
  .createServer(require('./src/StatisticsProvider'))
  .listen(process.env.PORT || 8080, function() {
    console.log('Statistics provider is ready on 8080');
  });