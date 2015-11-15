var net = require('net');

require('./src/setupDatabase');

net
  .createServer(require('./src/RequestController'))
  .listen(process.env.PORT || 8080, function() {
    console.log('Statistics provider is ready on 8080');
  });